<template>
    <div class="student">
        <add-student></add-student>
        <student-list></student-list>
    </div>
</template>

<script>
import AddStudent from '@/components/students/AddStudent'
import StudentList from '@/components/students/StudentList'

export default {
    components : {
        AddStudent,
        StudentList,
    }
}
</script>
