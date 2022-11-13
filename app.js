const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish Course & learn Vue!",
      courseGoalB: "Master Course",
      VueLink: "https://vuejs.org/",
      counter: 20,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    addEvent(num) {
      return (this.counter += num);
    },
    removeEvent(num) {
      return (this.counter -= num);
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("submitted");
    },
    confirmedNameOnEnter() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#courseApp");
