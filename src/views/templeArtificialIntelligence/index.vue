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
          <div class="img"></div>
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
          <div class="img"></div>
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
          <div class="img"></div>
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
          <div class="img"></div>
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
          <div class="img"></div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <ul>
        <li>
          <span>知识图谱</span>
        </li>
        <li>
          <span>机器学习</span>
        </li>
        <li>
          <span>终端态势感知</span>
        </li>
        <li>
          <span>生物识别</span>
        </li>
        <li>
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
    }
  },
  components: { ScrollContent, BarInfo },
  methods: {
    getKnowledgeGraph() {
      this.$api.templeArtificialIntelligence.getKnowledgeGraph().then(response => {
        this.knowledgeGraphList = this.transformObjectToArray(response.data.result.result);
      })
    },
    getMachineLearning() {
      this.$api.templeArtificialIntelligence.getMachineLearning().then(response => {
        this.machineLearningList = this.transformObjectToArray(response.data.result.result);
      })
    },
    getTerminalSituation() {
      this.$api.templeArtificialIntelligence.getTerminalSituation().then(response => {
        this.terminalSituationList = this.transformObjectToArray(response.data.result.result);
      })
    },
    getBiometrics() {
      this.$api.templeArtificialIntelligence.getBiometrics().then(response => {
        this.biometricsList = this.transformObjectToArray(response.data.result.result);
      })
    },
    getRealtimeIntelligence() {
      this.$api.templeArtificialIntelligence.getRealtimeIntelligence().then(response => {
        this.realtimeIntelligenceList = this.transformObjectToArray(response.data.result.result);
      })
    },
    transformObjectToArray(data) {
      let newArray = [];
      for(let i in data) {
        newArray.push({
          name: i,
          value: data[i],
        })
      }
      return newArray;
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
              display: block;
              width: 397px;
              height: 361px;
              background: url("../../assets/templeArtificialIntelligence/knowledge.png");
            }
          }
          &:nth-child(2) {
            width: 332px;
            height: 312px;
            .img {
              display: block;
              width: 332px;
              height: 312px;
              background: url("../../assets/templeArtificialIntelligence/machine.png");
            }
            .content {
              height: 130px;
              margin-bottom: 30px;
            }
          }
          &:nth-child(3) {
            width: 294px;
            height: 283px;
            .img {
              display: block;
              width: 294px;
              height: 283px;
              background: url("../../assets/templeArtificialIntelligence/client.png");
            }
            .content {
              height: 80px;
              margin-bottom: 35px;
            }
          }
          &:nth-child(4) {
            width: 332px;
            height: 312px;
            .img {
              display: block;
              width: 332px;
              height: 312px;
              background: url("../../assets/templeArtificialIntelligence/animal.png");
            }
            .content {
              height: 130px;
              margin-bottom: 30px;
            }
          }
          &:nth-child(5) {
            width: 397px;
            height: 361px;
            .img {
              display: block;
              width: 397px;
              height: 361px;
              background: url("../../assets/templeArtificialIntelligence/smart.png");
            }
            .content {
              height: 180px;
              margin-bottom: 55px;
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
          flex-basis: 130px;
          text-align: center;
          background-image: url('../../assets/templeArtificialIntelligence/titlebg.png');
        }
      }
    }
  }
</style>
