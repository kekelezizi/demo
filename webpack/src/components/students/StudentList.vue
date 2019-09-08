<template>
    <div class="student-list">
        <div>事物列表 ：</div>
        <ul>
            <li
                v-for="item in studentList"
                :key="item.id"
            >
            快乐事物：{{ student.name }}
            描述：{{ student.dec }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed : {
        ...mapState(['studentList'])
    }
}
</script>
