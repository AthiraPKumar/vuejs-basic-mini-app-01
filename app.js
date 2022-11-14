const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish Course & learn Vue!",
      courseGoalB: "Master Course",
      VueLink: "https://vuejs.org/",
      counter: 20,
      name: "",
      confirmedName: "",
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
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
    resetInput() {
      this.name = "";
    },
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected =  !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
  computed: {
    Fullname() {
      if (this.name === "") {
        return "";
      } else {
        return this.name + "" + "Kumar";
      }
    },
  },
  watch: {
    // wacher is best for counters
    counter(value) {
      if (value > 50) {
        return (this.counter = 0);
      }
    },
  },
});

app.mount("#courseApp");
