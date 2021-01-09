/******/ (function () {
  // webpackBootstrap
  /*!*******************!*\
  !*** ./app/sw.js ***!
  \*******************/
  /* eslint-disable */
  console.log("".concat(new Date(), ": Service Worker is loaded")); // Set cache name for multiple projects.
  // @see https://developers.google.com/web/tools/workbox/modules/workbox-core

  workbox.core.setCacheNameDetails({
    prefix: "Expense Manage",
    suffix: "v1",
    precache: "install-time",
    runtime: "run-time",
    googleAnalytics: "ga",
  });
  workbox.core.skipWaiting();
  workbox.core.clientsClaim(); // Enable google analytics for offline
  // @see https://developers.google.com/web/tools/workbox/modules/workbox-google-analytics
  // workbox.googleAnalytics.initialize();

  workbox.precaching.precacheAndRoute([
    { revision: "eb204259dbb6286e83480942c17ae13f", url: "/index.html" },
  ]); // Cache Google Fonts

  workbox.routing.registerRoute(
    "https://fonts.googleapis.com/(.*)",
    new workbox.strategies.CacheFirst({
      cacheName: "google-fonts",
      cacheableResponse: {
        statuses: [0, 200],
      },
    })
  ); // Static content from Google

  workbox.routing.registerRoute(
    /.*(?:gstatic)\.com.*$/,
    new workbox.strategies.CacheFirst({
      cacheName: "google-static",
    })
  ); // Cache any images which are included the extention list

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: "image-content",
      cacheableResponse: {
        statuses: [0, 200],
      },
    })
  ); // Cache any JavaScript and CSS which are included the extention list

  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "static-resources",
      cacheableResponse: {
        statuses: [0, 200],
      },
    })
  ); // Cache any HTTP Content

  workbox.routing.registerRoute(
    /^http.*/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "http-content",
      cacheableResponse: {
        statuses: [0, 200],
      },
    }),
    "GET"
  );
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NpZ25lbWVudC8uL2FwcC9zdy5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiRGF0ZSIsIndvcmtib3giLCJjb3JlIiwic2V0Q2FjaGVOYW1lRGV0YWlscyIsInByZWZpeCIsInN1ZmZpeCIsInByZWNhY2hlIiwicnVudGltZSIsImdvb2dsZUFuYWx5dGljcyIsInNraXBXYWl0aW5nIiwiY2xpZW50c0NsYWltIiwicHJlY2FjaGluZyIsInByZWNhY2hlQW5kUm91dGUiLCJzZWxmIiwiX19XQl9NQU5JRkVTVCIsInJvdXRpbmciLCJyZWdpc3RlclJvdXRlIiwic3RyYXRlZ2llcyIsIkNhY2hlRmlyc3QiLCJjYWNoZU5hbWUiLCJjYWNoZWFibGVSZXNwb25zZSIsInN0YXR1c2VzIiwiU3RhbGVXaGlsZVJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBQSxPQUFPLENBQUNDLEdBQVIsV0FBZSxJQUFJQyxJQUFKLEVBQWYsaUMsQ0FFQTtBQUNBOztBQUNBQyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsbUJBQWIsQ0FBaUM7QUFDL0JDLFFBQU0sRUFBRSxvQkFEdUI7QUFFL0JDLFFBQU0sRUFBRSxJQUZ1QjtBQUcvQkMsVUFBUSxFQUFFLGNBSHFCO0FBSS9CQyxTQUFPLEVBQUUsVUFKc0I7QUFLL0JDLGlCQUFlLEVBQUU7QUFMYyxDQUFqQztBQVFBUCxPQUFPLENBQUNDLElBQVIsQ0FBYU8sV0FBYjtBQUNBUixPQUFPLENBQUNDLElBQVIsQ0FBYVEsWUFBYixHLENBRUE7QUFDQTtBQUNBOztBQUVBVCxPQUFPLENBQUNVLFVBQVIsQ0FBbUJDLGdCQUFuQixDQUFvQ0MsSUFBSSxDQUFDQyxhQUF6QyxFLENBRUE7O0FBQ0FiLE9BQU8sQ0FBQ2MsT0FBUixDQUFnQkMsYUFBaEIsQ0FDRSxtQ0FERixFQUVFLElBQUlmLE9BQU8sQ0FBQ2dCLFVBQVIsQ0FBbUJDLFVBQXZCLENBQWtDO0FBQ2hDQyxXQUFTLEVBQUUsY0FEcUI7QUFFaENDLG1CQUFpQixFQUFFO0FBQUVDLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKO0FBQVo7QUFGYSxDQUFsQyxDQUZGLEUsQ0FRQTs7QUFDQXBCLE9BQU8sQ0FBQ2MsT0FBUixDQUFnQkMsYUFBaEIsQ0FDRSx1QkFERixFQUVFLElBQUlmLE9BQU8sQ0FBQ2dCLFVBQVIsQ0FBbUJDLFVBQXZCLENBQWtDO0FBQ2hDQyxXQUFTLEVBQUU7QUFEcUIsQ0FBbEMsQ0FGRixFLENBT0E7O0FBQ0FsQixPQUFPLENBQUNjLE9BQVIsQ0FBZ0JDLGFBQWhCLENBQ0Usd0JBREYsRUFFRSxJQUFJZixPQUFPLENBQUNnQixVQUFSLENBQW1CQyxVQUF2QixDQUFrQztBQUNoQ0MsV0FBUyxFQUFFLGVBRHFCO0FBRWhDQyxtQkFBaUIsRUFBRTtBQUFFQyxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSjtBQUFaO0FBRmEsQ0FBbEMsQ0FGRixFLENBUUE7O0FBQ0FwQixPQUFPLENBQUNjLE9BQVIsQ0FBZ0JDLGFBQWhCLENBQ0UsZUFERixFQUVFLElBQUlmLE9BQU8sQ0FBQ2dCLFVBQVIsQ0FBbUJLLG9CQUF2QixDQUE0QztBQUMxQ0gsV0FBUyxFQUFFLGtCQUQrQjtBQUUxQ0MsbUJBQWlCLEVBQUU7QUFBRUMsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUo7QUFBWjtBQUZ1QixDQUE1QyxDQUZGLEUsQ0FRQTs7QUFDQXBCLE9BQU8sQ0FBQ2MsT0FBUixDQUFnQkMsYUFBaEIsQ0FDRSxTQURGLEVBRUUsSUFBSWYsT0FBTyxDQUFDZ0IsVUFBUixDQUFtQkssb0JBQXZCLENBQTRDO0FBQzFDSCxXQUFTLEVBQUUsY0FEK0I7QUFFMUNDLG1CQUFpQixFQUFFO0FBQUVDLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKO0FBQVo7QUFGdUIsQ0FBNUMsQ0FGRixFQU1FLEtBTkYsRSIsImZpbGUiOiJzdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmNvbnNvbGUubG9nKGAke25ldyBEYXRlKCl9OiBTZXJ2aWNlIFdvcmtlciBpcyBsb2FkZWRgKTtcblxuLy8gU2V0IGNhY2hlIG5hbWUgZm9yIG11bHRpcGxlIHByb2plY3RzLlxuLy8gQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9tb2R1bGVzL3dvcmtib3gtY29yZVxud29ya2JveC5jb3JlLnNldENhY2hlTmFtZURldGFpbHMoe1xuICBwcmVmaXg6IFwic3RhcnRlci1yZWFjdC1mbHV4XCIsXG4gIHN1ZmZpeDogXCJ2MVwiLFxuICBwcmVjYWNoZTogXCJpbnN0YWxsLXRpbWVcIixcbiAgcnVudGltZTogXCJydW4tdGltZVwiLFxuICBnb29nbGVBbmFseXRpY3M6IFwiZ2FcIlxufSk7XG5cbndvcmtib3guY29yZS5za2lwV2FpdGluZygpO1xud29ya2JveC5jb3JlLmNsaWVudHNDbGFpbSgpO1xuXG4vLyBFbmFibGUgZ29vZ2xlIGFuYWx5dGljcyBmb3Igb2ZmbGluZVxuLy8gQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9tb2R1bGVzL3dvcmtib3gtZ29vZ2xlLWFuYWx5dGljc1xuLy8gd29ya2JveC5nb29nbGVBbmFseXRpY3MuaW5pdGlhbGl6ZSgpO1xuXG53b3JrYm94LnByZWNhY2hpbmcucHJlY2FjaGVBbmRSb3V0ZShzZWxmLl9fV0JfTUFOSUZFU1QpO1xuXG4vLyBDYWNoZSBHb29nbGUgRm9udHNcbndvcmtib3gucm91dGluZy5yZWdpc3RlclJvdXRlKFxuICBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vKC4qKVwiLFxuICBuZXcgd29ya2JveC5zdHJhdGVnaWVzLkNhY2hlRmlyc3Qoe1xuICAgIGNhY2hlTmFtZTogXCJnb29nbGUtZm9udHNcIixcbiAgICBjYWNoZWFibGVSZXNwb25zZTogeyBzdGF0dXNlczogWzAsIDIwMF0gfVxuICB9KVxuKTtcblxuLy8gU3RhdGljIGNvbnRlbnQgZnJvbSBHb29nbGVcbndvcmtib3gucm91dGluZy5yZWdpc3RlclJvdXRlKFxuICAvLiooPzpnc3RhdGljKVxcLmNvbS4qJC8sXG4gIG5ldyB3b3JrYm94LnN0cmF0ZWdpZXMuQ2FjaGVGaXJzdCh7XG4gICAgY2FjaGVOYW1lOiBcImdvb2dsZS1zdGF0aWNcIlxuICB9KVxuKTtcblxuLy8gQ2FjaGUgYW55IGltYWdlcyB3aGljaCBhcmUgaW5jbHVkZWQgdGhlIGV4dGVudGlvbiBsaXN0XG53b3JrYm94LnJvdXRpbmcucmVnaXN0ZXJSb3V0ZShcbiAgL1xcLig/OnBuZ3xnaWZ8anBnfHN2ZykkLyxcbiAgbmV3IHdvcmtib3guc3RyYXRlZ2llcy5DYWNoZUZpcnN0KHtcbiAgICBjYWNoZU5hbWU6IFwiaW1hZ2UtY29udGVudFwiLFxuICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7IHN0YXR1c2VzOiBbMCwgMjAwXSB9XG4gIH0pXG4pO1xuXG4vLyBDYWNoZSBhbnkgSmF2YVNjcmlwdCBhbmQgQ1NTIHdoaWNoIGFyZSBpbmNsdWRlZCB0aGUgZXh0ZW50aW9uIGxpc3Rcbndvcmtib3gucm91dGluZy5yZWdpc3RlclJvdXRlKFxuICAvXFwuKD86anN8Y3NzKSQvLFxuICBuZXcgd29ya2JveC5zdHJhdGVnaWVzLlN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcbiAgICBjYWNoZU5hbWU6IFwic3RhdGljLXJlc291cmNlc1wiLFxuICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7IHN0YXR1c2VzOiBbMCwgMjAwXSB9XG4gIH0pXG4pO1xuXG4vLyBDYWNoZSBhbnkgSFRUUCBDb250ZW50XG53b3JrYm94LnJvdXRpbmcucmVnaXN0ZXJSb3V0ZShcbiAgL15odHRwLiovLFxuICBuZXcgd29ya2JveC5zdHJhdGVnaWVzLlN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcbiAgICBjYWNoZU5hbWU6IFwiaHR0cC1jb250ZW50XCIsXG4gICAgY2FjaGVhYmxlUmVzcG9uc2U6IHsgc3RhdHVzZXM6IFswLCAyMDBdIH1cbiAgfSksXG4gIFwiR0VUXCJcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9
