<template>
  <div class="add-person">
    <!-- shangbufen -->
    <div class="mask">
      <div class="content">
        <header class="header">
          <p>选择人员</p>
          <a href="#" class="close">x</a>
        </header>
        <body class="body">
          <div class="container">
            <a-form
              :form="form"
              @submit="handleSubmit"
            >
              <a-form-item
                label="Note"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 12 }"
              >
                <a-input
                  v-decorator="[
                    'note',
                    {rules: [{ required: true, message: 'Please input your note!' }]}
                  ]"
                />
              </a-form-item>
              <a-form-item
                label="Gender"
                :label-col="{ span: 5 }"
                :wrapper-col="{ span: 12 }"
              >
                <a-select
                  v-decorator="[
                    'gender',
                    {rules: [{ required: true, message: 'Please select your gender!' }]}
                  ]"
                  placeholder="Select a option and change input text above"
                  @change="handleSelectChange"
                >
                  <a-select-option value="male">
                    male
                  </a-select-option>
                  <a-select-option value="female">
                    female
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item
                :wrapper-col="{ span: 12, offset: 5 }"
              >
                <a-button
                  type="primary"
                  html-type="submit"
                >
                  Submit
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </body>
        <footer class="footer">
          <button></button>
          <button class="sure"></button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPerson',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mask{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  .content{
    position: absolute;
    left: 50%;
    top: 60px;
    background: #ffffff;
    .header{
      box-sizing: border-box;
      width: 100%;
      padding: 10px;
      height: 44px;
      border-bottom: 1px solid #eeeeee;
      p{
        float: left;
      }
      a{
        display: block;
        float: right;
        color: #cccccc;
      }
    }
    .body{
      width: 100%;
      margin: 0 auto;
      .container{
        width: 300px;
        margin: 35px auto 20px;
        border-bottom: 1px solid #eeeeee;
      }
    }
    .footer{
      width: 100%;
      height: 44px;
      button{
        width: 50px;
        line-height: 44px;
        border: 1px solid #eeeeee;
        float: left;
        right: 35px;
        margin-left: 12px;
      }
      .sure{
        background-color: dodgerblue;
      }
    }
  }
}
</style>
