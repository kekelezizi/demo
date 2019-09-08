<template>
  <div class="person-manage">
    <div class="topitem">
      <span class="logoitem"
            @click="showModal"></span>
      <span class="creatitem">新增人员</span>
    </div>
    <div class="member">
      <a-table :columns="columns"
               :dataSource="data"
               rowKey="account">
        <span slot="action">
          <a href="javascript:;"
             @click="edit">Edit</a> |
          <a href="javascript:;"
             @click="deleteMem()">Delete</a>
        </span>
      </a-table>
    </div>
    <!-- Add member modal -->
    <div>
      <!-- <a-button type="primary"
                @click="showModal">Open Modal with async logic</a-button> -->
      <a-modal title="选择人员"
               :visible="visible"
               @ok="handleOk"
               @cancel="handleCancel"
               width="400px">
        <p>
          <!-- {{ModalText}} -->
          <a-form>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24}">
              <a-col span="12">
                <a-form-item label="账户"
                             :required="true">
                  <a-input v-model="form.account" />
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item label="姓名"
                             :required="true">
                  <a-input v-model="form.name" />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24}">
              <a-col span="12">
                <a-form-item label="性别"
                             :required="true">
                  <a-select placeholder="Select a option and change input text above"
                            @change="handleSelectChange">
                    <a-select-option value="male">
                      male
                    </a-select-option>
                    <a-select-option value="female">
                      female
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item label="邮箱"
                             :required="true">
                  <a-input v-model="form.sex" />
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item label="手机号"
                             :required="true">
                  <a-input v-model="form.phone" />
                </a-form-item>
              </a-col>
              <a-col span="12">
                <a-form-item :required="true">
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </p>
      </a-modal>
    </div>
  </div>
</template>

<script>
const columns = [{
  dataIndex: 'account',
  title: '账户',
  key: 'account',
  slots: { title: 'customTitle' },
  scopedSlots: { customRender: 'account' }
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '性别',
  key: 'sex',
  dataIndex: 'sex',
  scopedSlots: { customRender: 'sex' }
}, {
  title: '邮箱',
  key: 'email',
  dataIndex: 'email',
  scopedSlots: { customRender: 'email' }
}, {
  title: '手机号',
  key: 'phone',
  dataIndex: 'phone',
  scopedSlots: { customRender: 'phone' }
}, {
  title: 'Action',
  key: 'action',
  scopedSlots: { customRender: 'action' }
}]

const data = [{
  account: '001',
  name: 'eleven',
  phone: '1111111',
  email: '@definesys.com',
  sex: 'male'
}, {
  account: '002',
  name: 'Jim Green',
  phone: '2222222',
  email: '@definesys.com',
  sex: 'male'
}, {
  account: '003',
  name: 'Joe Black',
  phone: '33333333',
  email: '@definesys.com',
  sex: 'male'
}]

export default {
  name: 'PersonManage',
  data () {
    return {
      data,
      columns,
      visible: false,
      formLayout: 'horizontal',
      form: {
        account: '',
        name: '',
        sex: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      console.log(this.form)
      this.data.push(this.form)
      this.visible = false
    },
    handleCancel () {
      this.visible = false
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        // note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    },
    edit () {
      this.visible = true
      this.form = ''
    },
    deleteMem (dataIndex) {
      this.data.splice(dataIndex, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.person-manage {
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
  .member {
    border: 1px solid grey;
    border-radius: 5px;
  }
}

.topitem {
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  margin: 10px 10px;
  .logoitem {
    display: inline-block;
    width: 30px;
    height: 30px;
    // border: 1px solid black;
    background-image: url(../../../static/logo1.png);
    cursor: pointer;
  }
  .creatitem {
    // line-height: 30px;
    display: inline-block;
  }
}
</style>
