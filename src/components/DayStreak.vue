<template>
  <div class="day-streak">
    <div>
      <span>{{ streakCount }}</span>
    </div>
    <div v-if="streakCount === 1">day streak</div>
    <div v-else>days streak</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "DayStreak",
  computed: {
    streakLastDay() {
      return this.$store.state.streak.lastDay;
    },
    streakCount() {
      return this.$store.state.streak.count;
    },
    counter() {
      return this.$store.state.counter;
    },
  },
  watch: {
    counter(newValue, oldValue) {
      // oldValue !== 1 is dirty but prevents auto add winstreak if someone loads tracker with counter = 2 on the next day
      if (newValue - oldValue === 1 && oldValue !== 1) {
        const datesDifference = this.calculatetDatesDifference(
          this.getTodayDate(),
          this.streakLastDay
        );
        this.setStreakLastDay({ lastDay: this.getTodayDate() });

        if (datesDifference === 1) {
          this.increaseStreakCount();
        } else if (datesDifference > 1) {
          this.resetStreakCount();
        }
      }
    },
  },
  methods: {
    ...mapMutations([
      "increaseStreakCount",
      "resetStreakCount",
      "setStreakLastDay",
      "setStreakCount",
    ]),
    saveToStorage() {
      localStorage.setItem(
        "everyday-tracker-streak-last-day",
        this.streakLastDay
      );
      localStorage.setItem("everyday-tracker-streak-count", this.streakCount);
    },
    getTodayDate() {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      today = today.toJSON();
      return today;
    },
    calculatetDatesDifference(date1, date2) {
      return Math.abs(
        (new Date(date1) - new Date(date2)) / (24 * 60 * 60 * 1000)
      );
    },
  },
  mounted() {
    const localStreakLastDay = localStorage.getItem(
      "everyday-tracker-streak-last-day"
    );
    if (localStreakLastDay) {
      this.setStreakLastDay({ lastDay: localStreakLastDay });
    }

    if (this.streakLastDay === "") {
      this.setStreakLastDay({ lastDay: this.getTodayDate() });
    }

    const localStreakCount = localStorage.getItem(
      "everyday-tracker-streak-count"
    );
    if (localStreakCount) {
      this.setStreakCount({ count: parseInt(localStreakCount) });
    }

    window.addEventListener("beforeunload", () => {
      this.saveToStorage();
    });
  },
};
</script>

<style scoped>
.day-streak {
  width: max-content;
  margin: 10px auto 0;
  text-align: center;
}
span {
  padding: 0 5px;
}
</style>