<template>
  <div class="templeArtificialIntelligence">
    <div class="contain">
      <ul>
        <li class="thirdLevelBox">
          <div class="content">
            <scroll-content
              :data="knowledgeGraphList"
              :height="'100%'"
              :class-option="{singleHeight: 49}"
            >
              <template #content>
                <template v-for="(item, index) in knowledgeGraphList">
                  <bar-info
                    :data="item"
                    :key="index"
                    :is-attention="index % 2 == 0"
                    :show-value="true"
                  />
                </template>
              </template>
            </scroll-content>
          </div>
          <div class="img" @click="drump('知识图谱')"></div>
        </li>
        <li class="secondLevelBox">
          <div class="content">
            <scroll-content
              :height="'100%'"
              :data="machineLearningList"
              :class-option="{singleHeight: 49}"
            >
              <template #content>
                <template v-for="(item, index) in machineLearningList">
                  <bar-info
                    :data="item"
                    :key="index"
                    :is-attention="index % 2 == 0"
                  />
                </template>
              </template>
            </scroll-content>
          </div>
          <div class="img" @click="drump('机器学习')"></div>
        </li>
        <li class="firstLevelBox">
          <div class="content">
            <scroll-content
              :height="'100%'"
              :data="terminalSituationList"
              :class-option="{singleHeight: 49}"
            >
              <template #content>
                <template v-for="(item, index) in terminalSituationList">
                  <bar-info
                    :data="item"
                    :key="index"
                    :is-attention="index % 2 == 0"
                  />
                </template>
              </template>
            </scroll-content>
          </div>
          <div class="img" @click="drump('态势感知')"></div>
        </li>
        <li class="secondLevelBox">
          <div class="content">
            <scroll-content
              :height="'100%'"
              :data="biometricsList"
              :class-option="{singleHeight: 49}"
            >
              <template #content>
                <template v-for="(item, index) in biometricsList">
                  <bar-info
                    :data="item"
                    :key="index"
                    :is-attention="index % 2 == 0"
                  />
                </template>
              </template>
            </scroll-content>
          </div>
          <div class="img" @click="drump('生物识别')"></div>
        </li>
        <li class="thirdLevelBox">
          <div class="content">
            <scroll-content
              :height="'100%'"
              :data="realtimeIntelligenceList"
              :class-option="{singleHeight: 49}"
            >
              <template #content>
                <template v-for="(item, index) in realtimeIntelligenceList">
                  <bar-info
                    :data="item"
                    :key="index"
                    :is-attention="index % 2 == 0"
                  />
                </template>
              </template>
            </scroll-content>
          </div>
          <div class="img" @click="drump('实时智能')"></div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <ul>
        <li @click="drump('知识图谱')">
          <span>知识图谱</span>
        </li>
        <li @click="drump('机器学习')">
          <span>机器学习</span>
        </li>
        <li @click="drump('态势感知')">
          <span>终端态势感知</span>
        </li>
        <li @click="drump('生物识别')">
          <span>生物识别</span>
        </li>
        <li @click="drump('实时智能')">
          <span>实时智能</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ScrollContent from '@/components/vueSeamlessScroll';
import BarInfo from './components/barInfo';
export default {
  name: "templeArtificialIntelligence",
  data () {
    return {
      knowledgeGraphList: [],
      machineLearningList: [],
      terminalSituationList: [],
      biometricsList: [],
      realtimeIntelligenceList: [],

      knowledgeGraphUrl: '',
      machineLearningUrl: '',
      terminalSituationUrl: '',
      biometricsUrl: '',
      realtimeIntelligenceUrl: '',

    }
  },
  components: { ScrollContent, BarInfo },
  methods: {
    getKnowledgeGraph() {
      this.$api.templeArtificialIntelligence.getKnowledgeGraph().then(response => {
        this.knowledgeGraphList = this.transformObjectToArray(response.data.result.result);
        this.knowledgeGraphUrl = response.data.result.result.url
      })
    },
    getMachineLearning() {
      this.$api.templeArtificialIntelligence.getMachineLearning().then(response => {
        this.machineLearningList = this.transformObjectToArray(response.data.result.result);
        this.machineLearningUrl = response.data.result.result.url;
      })
    },
    getTerminalSituation() {
      this.$api.templeArtificialIntelligence.getTerminalSituation().then(response => {
        this.terminalSituationList = this.transformObjectToArray(response.data.result.result);
        this.terminalSituationUrl = response.data.result.result.url;
      })
    },
    getBiometrics() {
      this.$api.templeArtificialIntelligence.getBiometrics().then(response => {
        this.biometricsList = this.transformObjectToArray(response.data.result.result);
        this.biometricsUrl = response.data.result.result.url;
      })
    },
    getRealtimeIntelligence() {
      this.$api.templeArtificialIntelligence.getRealtimeIntelligence().then(response => {
        this.realtimeIntelligenceList = this.transformObjectToArray(response.data.result.result);
        this.realtimeIntelligenceUrl = response.data.result.result.url;
      })
    },
    transformObjectToArray(data) {
      let newArray = [];
      for(let i in data) {
        if(i !== 'url') {
          newArray.push({
            name: i,
            value: data[i],
          })
        }
      }
      //奇数列列表循环完，会出现连续列表同色背景
      if(newArray.length % 2 === 1) {
        Array.prototype.push.apply(newArray, [newArray[0]]);
      }
      return newArray;
    },
    drump(name) {
      switch(name) {
        case '知识图谱': window.open(this.knowledgeGraphUrl, 'blank'); break;
        case '机器学习': window.open(this.machineLearningUrl, 'blank'); break;
        case '态势感知': window.open(this.terminalSituationUrl, 'blank'); break;
        case '生物识别': window.open(this.biometricsUrl, 'blank'); break;
        case '实时智能': window.open(this.realtimeIntelligenceUrl, 'blank'); break;
      }
    }
  },
  mounted() {
    this.getRealtimeIntelligence();
    this.getMachineLearning();
    this.getTerminalSituation();
    this.getKnowledgeGraph()
    this.getBiometrics();
  }
}
</script>

<style scoped lang="scss">
  div.templeArtificialIntelligence {
    width: 1920px;
    height: 1080px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('../../assets/templeArtificialIntelligence/bg.png');
    padding: 0 22px 22px 22px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    div.contain {
      width: 1803px;
      height: 649px;
      margin: 0 auto;
      margin-top: 135px;
      ul {
        width: 1752px;
        overflow: hidden;
        margin: 0 auto;
        li {
          float: left;
          &:nth-child(1){
            width: 397px;
            .content {
              height: 180px;
              margin-bottom: 55px;
            }
            .img {
              cursor: pointer;
              display: block;
              width: 397px;
              height: 361px;
              margin-bottom: 20px;
              background: url("../../assets/templeArtificialIntelligence/knowledge.png");
              transition:all 0.2s linear;
              &:hover {
                transform: scale(1.05);
              }
            }
          }
          &:nth-child(2) {
            width: 332px;
            .content {
              height: 130px;
              margin-bottom: 30px;
            }
            .img {
              cursor: pointer;
              display: block;
              width: 332px;
              height: 312px;
              background: url("../../assets/templeArtificialIntelligence/machine.png");
              transition:all 0.2s linear;
              &:hover {
                transform: scale(1.05);
              }
            }
          }
          &:nth-child(3) {
            width: 294px;
            .content {
              height: 80px;
              margin-bottom: 35px;
            }
            .img {
              cursor: pointer;
              display: block;
              width: 294px;
              height: 283px;
              background: url("../../assets/templeArtificialIntelligence/client.png");
              transition:all 0.2s linear;
              &:hover {
                transform: scale(1.05);
              }
            }

          }
          &:nth-child(4) {
            width: 332px;
            .content {
              height: 130px;
              margin-bottom: 30px;
            }
            .img {
              cursor: pointer;
              display: block;
              width: 332px;
              height: 312px;
              background: url("../../assets/templeArtificialIntelligence/animal.png");
              transition:all 0.2s linear;
              &:hover {
                transform: scale(1.05);
              }
            }
          }
          &:nth-child(5) {
            width: 397px;
            .content {
              height: 180px;
              margin-bottom: 55px;
            }
            .img {
              cursor: pointer;
              display: block;
              width: 397px;
              height: 361px;
              margin-bottom: 20px;
              background: url("../../assets/templeArtificialIntelligence/smart.png");
              transition:all 0.2s linear;
              &:hover {
                transform: scale(1.05);
              }
            }
          }
        }
      }
    }
    div.footer {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 83px;
      width: 100%;
      background-image: url('../../assets/templeArtificialIntelligence/footer.png');
      >ul {
        width: 745px;
        height: 35px;
        margin: 0 auto;
        margin-top: 23px;
        display: flex;
        justify-content: space-between;
        li {
          font-family: AdobeHeitiStd-Regular;
          font-size: 18px;
          line-height: 35px;
          color: #00deff;
          cursor: pointer;
          flex-basis: 130px;
          text-align: center;
          background-image: url('../../assets/templeArtificialIntelligence/titlebg.png');
        }
      }
    }
  }
</style>
