<template>
    <div class="faq-layout">
			<div class="question-container" v-for="(question, index) in list" :key="question.id">
				<div class="number">{{index + 1}}</div>
				<div style="width: 100%; height: 100%">
					<div class="question">
						<h1>How to take advance of consulting from our service ?</h1>
						<div class="circle" :class="{'circle-closed': question.open}" @click="toggleQuestion(index)"></div>
					</div>
					<div class="answer" v-if="question.open">
						<div class="line"></div>
						<p class="answer-text">Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed. Morbi venenatis convallis facilisis. Curabitur eget semper ipsum. Vivamus mattis facilisis tellus id semper. Morbi ut risus tellus. Mauris vel odio mattis, placerat eros et, interdum magna. Phasellus ac pharetra tortor. Maecenas eget magna pharetra, volutpat lorem id, pharetra lectus.</p>
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
      list: [
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        },
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        },
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        },
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        },
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        },
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        },
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        },
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        },
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        },
        {
          question: "How to take advance of consulting from our service ?",
          answer:
            "Nam lacus magna, varius id dignissim ut, bibendum non felis. Vivamus egestas ipsum nisl, quis iaculis ligula sagittis tincidunt. In egestas varius urna, at pellentesque risus sollicitudin sed.",
          open: false
        }
      ]
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
}
</style>
