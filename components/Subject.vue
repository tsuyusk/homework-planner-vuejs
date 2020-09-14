<template>
  <div class="subject-container">
    <header>
      <checkbox v-on:onCheck="onCheck" :isDone="subject.isDone" />
      <h1>{{ subject.title }}</h1>
      <button class="icon-button" @click="toggleWeeksList">
        <img v-if="isShown" src="/x.svg" alt="Close" />
        <img v-else src="/chevron-down.svg" alt="Open" />
      </button>
    </header>
    <div v-if="isShown" class="weeks-container">
      <div v-for="(week, index) in subject.weeks" :key="week.id" class="week">
        <checkbox v-on:onCheck="onCheck" :index="index" :isDone="week.isDone" />
        <p>{{ week.number }} week</p>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";

export default {
  name: "subject",
  props: {
    subject: Object,
    index: Number,
  },
  components: {
    Checkbox,
  },
  data: function () {
    return {
      isShown: this.subject.isShown,
    };
  },
  methods: {
    toggleWeeksList() {
      this.isShown = !this.isShown;
      this.subject.isShown = this.isShown;
      this.$emit("updateSubject", this.subject, this.index);
    },
    onCheck(isChecked, weekIndex) {
      if (weekIndex) {
        this.subject.weeks[weekIndex].isDone = isChecked;
      }
      this.subject.isDone = isChecked;

      this.$emit("updateSubject", this.subject);
    },
  },
};
</script>

<style scoped>
.subject-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.subject-container + .subject-container {
  margin-top: 12px;
}

.subject-container > header {
  position: relative;
  display: flex;
  align-items: center;

  width: 85%;
  background: #edf2f7;
  padding: 12px 8px;
}

.subject-container > header > h1 {
  font-size: 18px;
  font-weight: 500;
  margin-left: 8px;
}

.subject-container > header > .icon-button {
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  background: transparent;
  border: 0;

  transition: background 0.3s ease;
}

.subject-container > header > .icon-button:hover,
.subject-container > header > .icon-button:focus {
  background: #ddd;
}

.subject-container > header > .icon-button > img {
  width: 75%;
  height: 75%;
}

.weeks-container {
  width: 80%;
  padding: 8px 24px;
  background: #f7fafc;
}

.weeks-container > .week {
  display: flex;
  align-items: center;

  margin: 8px 0;
}

.weeks-container > .week > p {
  margin-left: 8px;
  font-size: 16px;
}
</style>
