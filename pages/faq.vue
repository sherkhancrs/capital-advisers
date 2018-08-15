<template>
    <div class="faq-layout">
			<div class="question-container" v-for="(item, index) in list" :key="item.id">
				<div class="number">{{index + 1}}</div>
				<div style="width: 100%; height: 100%">
					<div class="question">
						<h1>{{item.question}}</h1>
						<div class="circle" :class="{'circle-closed': item.open}" @click="toggleQuestion(index)"></div>
					</div>
					<div class="answer" v-if="item.open">
						<div class="line"></div>
						<p class="answer-text">{{item.answer}}</p>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
export default {
  layout: "faq",
  data() {
    return {
      list: []
    };
  },
  methods: {
    toggleQuestion(index) {
      for (var i = 0; i < this.list.length; i++) {
        if (i === index) {
          this.list[i].open = !this.list[i].open;
        } else {
          this.list[i].open = false;
        }
      }
    }
  },
  beforeMount() {
    this.$store.dispatch("loadFAQS");
    var faqInterval = setInterval(() => {
      if (this.$store.state.faqs.results) {
        this.$store.state.faqs.results.forEach(faq => {
          this.list.push({
            question: faq.question,
            answer: faq.answer,
            open: false
          });
        });
        clearInterval(faqInterval);
      } else {
      }
    }, 100);
  }
};
</script>
<style scoped>
h1 {
  margin: 0;
  font-size: 25px;
}
.faq-layout {
  padding-top: 80px;
  padding-bottom: 170px;
  display: flex;
  flex-direction: column;
}
.question-container {
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
}
.number {
  font-size: 51px;
  color: #d3d3d3;
  background-color: #e4e4e4;
  width: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.question {
  display: inline-flex;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  padding: 0 24px;
  align-items: center;
}
.circle {
  border-radius: 50%;
  background-color: #ef741c;
  width: 40px;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
}
.circle-closed {
  background-color: #e4e4e4;
}
.answer-text {
  font-size: 17px;
  line-height: 24px;
  margin: 0;
  margin: 28px 24px;
}
.line {
  height: 8px;
  width: 48px;
  background-color: #ef741c;
  margin-left: 24px;
}
@media (max-width: 40em) {
  h1 {
    font-size: 18px;
  }
  .number {
    width: 15%;
    font-size: 31px;
  }
  .question {
    padding: 0 14px;
  }
  .answer-text {
    margin: 18px 14px;
  }
  .faq-layout {
    padding-bottom: 0px;
  }
  .line {
    margin-left: 14px;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
  h1 {
    font-size: 18px;
  }
  .number {
    width: 15%;
    font-size: 31px;
  }
  .question {
    padding: 0 14px;
  }
  .answer-text {
    margin: 18px 14px;
  }
  .faq-layout {
    padding-bottom: 0px;
  }
  .line {
    margin-left: 14px;
  }
}
</style>
