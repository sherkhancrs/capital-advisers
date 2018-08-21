<template>
  <div>
    <div class="main-h">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <h1 class="bolded">FAQ</h1>
            <h3 class="thined">
              Frequently Asked Questions
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container c">
      <div class="row">
        <div class="col-xs-12">
          <div class="question-container" v-for="(item, index) in list" :key="item.id">
            <div class="number">{{index + 1}}</div>
            <div style="width: 100%; height: 100%">
              <div class="question">
                <h1>{{item.question}}</h1>
                <div class="circle" :class="{'circle-closed': item.open}" @click="toggleQuestion(index)">
                  <svg  style="margin-top:5px;"  v-if="!item.open" width="23px" height="12px" viewBox="0 0 23 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <!-- Generator: Sketch 51.1 (57501) - http://www.bohemiancoding.com/sketch -->
                      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                          <g id="icon/arow/down/active" transform="translate(-18.000000, -24.000000)" stroke="#FFFFFF">
                              <g id="Group">
                                  <path d="M29.3303389,33.8796321 L29.3390716,33.8708994 L38.9846176,24.2253534 L39.209971,24 L39.6606777,24.4507068 L39.4353244,24.6760601 L29.7897784,34.3216061 L29.564425,34.5469595 L29.3303389,34.3128734 L29.0962527,34.5469595 L28.8708994,34.3216061 L19.2253534,24.6760601 L19,24.4507068 L19.4507068,24 L19.6760601,24.2253534 L29.3216061,33.8708994 L29.3303389,33.8796321 Z" id="Combined-Shape"></path>
                              </g>
                          </g>
                      </g>
                  </svg>
                  <svg v-else width="23px" transform="rotate(180)" height="12px" viewBox="0 0 23 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <!-- Generator: Sketch 51.1 (57501) - http://www.bohemiancoding.com/sketch -->
                      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                          <g id="icon/arow/down/active" transform="translate(-18.000000, -24.000000)"  stroke="#000000">
                              <g id="Group">
                                  <path d="M29.3303389,33.8796321 L29.3390716,33.8708994 L38.9846176,24.2253534 L39.209971,24 L39.6606777,24.4507068 L39.4353244,24.6760601 L29.7897784,34.3216061 L29.564425,34.5469595 L29.3303389,34.3128734 L29.0962527,34.5469595 L28.8708994,34.3216061 L19.2253534,24.6760601 L19,24.4507068 L19.4507068,24 L19.6760601,24.2253534 L29.3216061,33.8708994 L29.3303389,33.8796321 Z" id="Combined-Shape"></path>
                              </g>
                          </g>
                      </g>
                  </svg>
                </div>
              </div>
              <div class="answer" v-if="item.open">
                <div class="line"></div>
                <p class="answer-text">{{item.answer}}</p>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
.main-h {
  background-color: #e4e4e4;
  color: black;
  padding-top: 140px;
  padding-bottom: 100px;
}
h1 {
  margin: 0;
  font-size: 25px;
}
.c {
  margin-top: 70px;
  margin-bottom: 100px;
}
.question-container {
  width: 100%;
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
  min-height: 90px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  margin-top: 5px;
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
  .line {
    margin-left: 14px;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
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
  .line {
    margin-left: 14px;
  }
}
</style>
