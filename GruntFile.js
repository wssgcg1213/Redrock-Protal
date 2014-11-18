module.exports = function(grunt) {
  grunt.initConfig({
  	config: grunt.file.readJSON('grunt.config.json'),
      imagemin: {
          /* 压缩图片大小 */
          dist: {
              options: {
                  optimizationLevel: 3 //定义 PNG 图片优化水平
              },
              files: [
                  {
                      expand: true,
                      src: '<%= config.images %>',
                      dest: 'public/images/', // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                      rename: function(dest,src){
                          return dest + src.slice(src.lastIndexOf('/'));
                      }
                  }
              ]
          }
      },
    //js压缩美化
  	uglify: {
  		options: {
  			banner: '/*! <%= config.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  		},
  		compress: {
  			files: [
          {
            expand: true,
            filter: 'isFile',
            src: '<%= config.js %>',
            dest: 'public/js/',
            rename: function(dest,src){
                return dest + src.slice(src.lastIndexOf('/'));
            }
          }
        ]
  		}
  	},

    //js强制检测
    jshint: {
      files: ['<%= config.js %>'],
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      },

    //css压缩
    cssmin: {
      compress: {
        files: [
          {
            expand: true,
            filter: 'isFile',
            src: '<%= config.css %>',
            dest: 'public/css',
            rename: function(dest,src){
                return dest + src.slice(src.lastIndexOf('/'));
            }
          }
        ]
      }
    },


    //文件修改监控
    watch: {
       options: {
        spawn: false,
      },
      files: ['<%= config.js %>','<%= config.css %>', '<%= config.images %>'],
      tasks: ['imagemin', 'uglify', 'cssmin']
    },

  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch']);
  
};