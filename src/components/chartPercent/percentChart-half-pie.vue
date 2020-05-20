<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    percent: { type: Number, required: true },
    labels: { type: String, required: true }
  },
  data() {
    return {
      chartdata: {
        labels: [this.labels, null],
        datasets: [
          {
            data: [this.percent, 100 - this.percent],
            backgroundColor: [this.calcColor()],
            borderWidth: 0
          }
        ]
      },
      options: {
        animation: { duration: 2500 },
        title: {
          display: true,
          fontColor: "#54575E",
          fontSize: "20",
          text: "Label",
          position: "top"
        },
        legend: { display: false },
        responsive: true,
        cutoutPercentage: 60,
        tooltips: {
          filter: function(item, data) {
            var label = data.labels[item.index];
            if (label) return 1;
          },
          callbacks: {
            label: function(item, data) {
              var label = data.labels[item.index];
              return label;
            }
          }
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      }
    };
  },
  mounted() {
    this.addPlugin({
      id: "Percent",
      beforeDraw: this.pluginPercent
    });
    this.renderChart(this.chartdata, this.options);
  },
  methods: {
    calcColor() {
      if (this.percent <= 33) {
        return "#E4746E";
      }
      if (this.percent > 33 && this.percent <= 66) {
        return "#FCB84D";
      }
      if (this.percent > 66) {
        return "#64BC65";
      }
    },
    pluginPercent(chart) {
      var width = chart.chart.width;
      var height = chart.chart.height;
      var ctx = chart.chart.ctx;

      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = `bold ${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      var text = this.percent + "%";
      var textX = Math.round((width - ctx.measureText(text).width) / 2);
      var textY = height - 25;
      ctx.fillStyle = this.calcColor();
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }
};
</script>
