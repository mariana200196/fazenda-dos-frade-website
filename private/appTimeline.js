var app = new Vue({
  el: "#appTimeline",
  data: {
      smallScreen: false,
      years: [2003, 2004, 2005, 2006, 2007, 2008, 2010, 2011, 2012, 2013, 2014, 2020],
      images: [
          {id: 2003, photos: ['images/2003_papai.JPG', 'images/2003_familia.JPG', 'images/2003_cupim.JPG']},
          {id: 2004, photos: ['images/2004_familia.JPG', 'images/2004_grupo.JPG', 'images/2004_assude.JPG']},
          {id: 2005, photos: ['images/2005_01.JPG', 'images/2005_07.JPG', 'images/2005_08.JPG']},
          {id: 2006, photos: ['images/2006_01.JPG', 'images/2006_02.JPG', 'images/2006_12.JPG']},
          {id: 2007, photos: ['images/2007_01.JPG', 'images/2007_02.JPG', 'images/2007_09.JPG']},
          {id: 2008, photos: ['images/2008_02.JPG', 'images/2008_05.JPG', 'images/2009_01.JPG']},
          {id: 2010, photos: ['images/2010_01.JPG', 'images/2010_06.JPG', 'images/2010_04.JPG']},
          {id: 2011, photos: ['images/2011_1.JPG', 'images/2011_8.JPG', 'images/2011_17.JPG']},
          {id: 2012, photos: ['images/2012_16.JPG', 'images/2012_14.JPG', 'images/2012_21.JPG']},
          {id: 2013, photos: ['images/2013_1.JPG', 'images/2013_9.JPG', 'images/2013_12.JPG']},
          {id: 2014, photos: ['images/2014_1.JPG', 'images/2014_2.JPG', 'images/2014_7.JPG']},
          {id: 2020, photos: ['images/2020_21.JPG', 'images/2020_15.JPG', 'images/2020_1.JPG']},
      ]
  },
  methods: {
      getImageArray: function(year) {
          let arr = this.images.find(x => x.id === year);
          if (arr != null) {
              return arr.photos;  
          } else {
              return null;
          }
      },
      getStarterImage: function(year) {
          let arr = this.images.find(x => x.id === year);
          if (arr != null) {
              return arr.photos[0];  
          } else {
              return null;
          }  
      },
      getNonStarters: function(year) {
          let arr = this.images.find(x => x.id === year);
          if (arr != null) {
              let finalArr = [];
              finalArr.push(arr.photos[1]);
              finalArr.push(arr.photos[2]);
              return finalArr;  
          } else {
              return null;
          }
      },
       getId: function(year) {
          let id = "multi-" + year;
          console.log(id);
          return id;
      },
      gethref: function() {
          let href = "#multi-" + year;
          console.log(href);
          return "#multi-2003";
      },
      isSmallScreen: function() {
          let windowWidth = window.innerWidth;
          if (windowWidth < 768) {
              console.log("small: " + windowWidth);
              this.smallScreen = true;
              console.log(this.smallScreen);
              return true;
          } else {
              console.log("large: " + windowWidth);
              this.smallScreen = false;
              console.log(this.smallScreen);
              return false;
          }
      }
  },
  mounted() {
      window.addEventListener('resize', this.isSmallScreen);
  },
})

