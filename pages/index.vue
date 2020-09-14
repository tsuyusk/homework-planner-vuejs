<template>
  <div class="app">
    <div class="subjectsList">
      <subject
        v-for="(subject, index) in subjects"
        :index="index"
        :key="subject.id"
        :subject="subject"
        v-on:updateSubject="handleUpdateSubject"
      />
    </div>
  </div>
</template>

<script>
import Subject from "../components/Subject";
import defaultSubjects from "../consts/subjects";

export default {
  name: "app",
  components: {
    Subject,
  },
  data: function () {
    return {
      subjects: [],
    };
  },
  mounted() {
    const storagedSubjects = localStorage.getItem("@HomeworkPlanner/subjects");

    if (storagedSubjects) {
      this.subjects = JSON.parse(storagedSubjects);
      return;
    }
    this.subjects = defaultSubjects;
  },
  methods: {
    handleUpdateSubject(updatedSubject, index) {
      this.subjects[index] = updatedSubject;

      localStorage.setItem(
        "@HomeworkPlanner/subjects",
        JSON.stringify(this.subjects)
      );
    },
  },
  head() {
    return {
      title: "Homework planner",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

textarea,
input,
body {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}

body {
  width: 100vw;
  min-height: 100vh;
}

button {
  cursor: pointer;
}
</style>

<style scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background: #fff;
}
.subjectsList {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 100%;
  padding: 24px 0;
}
</style>
