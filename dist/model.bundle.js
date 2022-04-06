(()=>{"use strict";var t,n=new Uint8Array(16);function e(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(n)}const r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,o=function(t){return"string"==typeof t&&r.test(t)};for(var i=[],u=0;u<256;++u)i.push((u+256).toString(16).substr(1));const s=function(t,n,r){var u=(t=t||{}).random||(t.rng||e)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,n){r=r||0;for(var s=0;s<16;++s)n[r+s]=u[s];return n}return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(i[t[n+0]]+i[t[n+1]]+i[t[n+2]]+i[t[n+3]]+"-"+i[t[n+4]]+i[t[n+5]]+"-"+i[t[n+6]]+i[t[n+7]]+"-"+i[t[n+8]]+i[t[n+9]]+"-"+i[t[n+10]]+i[t[n+11]]+i[t[n+12]]+i[t[n+13]]+i[t[n+14]]+i[t[n+15]]).toLowerCase();if(!o(e))throw TypeError("Stringified UUID is invalid");return e}(u)},f=function(t,n,e,r,o){let i=t,u=s(),f=n,a=e,c=r,d=o;const _={get_name:function(){return i},set_name:function(t){i=t},get_details:function(){return f},set_details:function(t){f=t},get_id:function(){return u},get_date:function(){return a},set_date:function(t){a=t},get_status:function(){return c},set_status:function(t){c=t},get_priority:function(){return d},set_priority:function(t){d=t},to_json:function(){return JSON.stringify(this,((t,n)=>void 0===["from_json","remove_self"].find((n=>n===t))&&"function"==typeof n?n():n))},from_json:function(t){const n=JSON.parse(t);return i=n.get_name,u=n.get_id,f=n.get_details,a=n.get_date,c=n.get_status,d=n.get_priority,_}};return _},a=function(t){let n=t,e=s(),r={};const o={set_name:function(t){n=t},get_name:function(){return n},get_id:function(){return e},get_tasks:function(){return Object.keys(r).map((t=>r[t]))},add_task:function(t){t.remove_self=function(){null!=r[t.get_id()]&&delete r[t.get_id()]},r[t.get_id()]=t},get_task:function(t){return r[t]},remove_task:function(t){null!=r[t]&&delete r[t]},to_json:function(){return JSON.stringify({name:n,id:e,tasks:JSON.stringify(r,((t,n)=>void 0!==n.to_json?n.to_json():n))})},from_json:function(t){const i=JSON.parse(t,((t,n)=>{if("tasks"===t){const t=JSON.parse(n);for(const n in t)t[n]=f().from_json(t[n]);return t}return n}));return n=i.name,e=i.id,r=i.tasks,o}};return o};a("Inbox"),a("Today")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TU4sR0FDdkIsSUFBSSxNQUFNcUIsS0FBUWhCLEVBQ2RBLEVBQUlnQixHQUFRbEQsSUFBY2dDLFVBQVVFLEVBQUlnQixJQUU1QyxPQUFPaEIsRUFFWCxPQUFPTCxLQU1YLE9BSEF2QixFQUFRNEIsRUFBSWpDLEtBQ1pNLEVBQU0yQixFQUFJYyxHQUNWWCxFQUFTSCxFQUFJZSxNQUNOckMsSUFlWCxPQUFPQSxHQU9Jd0IsRUFBZSxTQUNmQSxFQUFlLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgeyB2NCBhcyBnZW5lcmVhdGVfaWQgfSBmcm9tICd1dWlkJztcblxuY29uc3QgY3JlYXRlX3Rhc2sgPSBmdW5jdGlvbiAobmFtZSwgZGV0YWlscywgZGF0ZSwgc3RhdHVzLCBwcmlvcml0eSl7XG5cbiAgICBsZXQgX25hbWUgPSBuYW1lOyAgXG4gICAgbGV0IF9pZCA9IGdlbmVyZWF0ZV9pZCgpO1xuICAgIGxldCBfZGV0YWlscyA9IGRldGFpbHM7XG4gICAgbGV0IF9kYXRlID0gZGF0ZTtcbiAgICBsZXQgX3N0YXR1cyA9IHN0YXR1cztcbiAgICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICBjb25zdCBnZXRfbmFtZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9uYW1lOyB9O1xuICAgIGNvbnN0IHNldF9uYW1lID0gZnVuY3Rpb24gKG5hbWUpIHsgX25hbWUgPSBuYW1lOyB9OyBcbiAgICBjb25zdCBnZXRfZGV0YWlscyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9kZXRhaWxzOyB9O1xuICAgIGNvbnN0IHNldF9kZXRhaWxzID0gZnVuY3Rpb24gKGRldGFpbHMpIHsgX2RldGFpbHMgPSBkZXRhaWxzOyB9OyBcbiAgICBjb25zdCBnZXRfaWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfaWQ7IH07XG4gICAgY29uc3QgZ2V0X2RhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfZGF0ZTsgfTtcbiAgICBjb25zdCBzZXRfZGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7IF9kYXRlID0gZGF0ZTsgfTtcbiAgICBjb25zdCBnZXRfc3RhdHVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3N0YXR1czsgfTtcbiAgICBjb25zdCBzZXRfc3RhdHVzID0gZnVuY3Rpb24gKHN0YXR1cykgeyBfc3RhdHVzID0gc3RhdHVzOyB9XG4gICAgY29uc3QgZ2V0X3ByaW9yaXR5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3ByaW9yaXR5OyB9O1xuICAgIGNvbnN0IHNldF9wcmlvcml0eSA9IGZ1bmN0aW9uIChwcmlvcml0eSkgeyBfcHJpb3JpdHkgPSBwcmlvcml0eTsgfTtcbiAgICAvLyBOb3RlOiBJZGVhbGx5IHlvdSdkIHdhbnQgdG8gZW5jcnlwdCB0aGlzIGRhdGEgKGlmIHNlbnNpYmxlIGluZm9ybWF0aW9uIGlzIHByZXNlbnQpIGZvciBzZWN1cml0eSBwdXJwb3Nlc1xuICAgIC8vIEZvciB0aGUgcHVycG9zZSBvZiBzaW1wbGljaXR5IGVuY3J5cHRpb24gaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgc21hbGwgcHJvamVjdC5cbiAgICBjb25zdCB0b19qc29uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKGtleSwgdmFsdWUpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgaWdub3JlX2tleXMgPSBbXCJmcm9tX2pzb25cIiwgXCJyZW1vdmVfc2VsZlwiXTtcbiAgICAgICAgICAgICAgICBpZihpZ25vcmVfa2V5cy5maW5kKGsgPT4gayA9PT0ga2V5KSA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZih2YWx1ZSkgPT09ICdmdW5jdGlvbicpeyByZXR1cm4gdmFsdWUoKTsgfSBcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZyb21fanNvbiA9IGZ1bmN0aW9uIChqc29uKXtcbiAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShqc29uKTtcblxuICAgICAgICBfbmFtZSA9IG9iai5nZXRfbmFtZTtcbiAgICAgICAgX2lkID0gb2JqLmdldF9pZDtcbiAgICAgICAgX2RldGFpbHMgPSBvYmouZ2V0X2RldGFpbHM7XG4gICAgICAgIF9kYXRlID0gb2JqLmdldF9kYXRlO1xuICAgICAgICBfc3RhdHVzID0gb2JqLmdldF9zdGF0dXM7XG4gICAgICAgIF9wcmlvcml0eSA9IG9iai5nZXRfcHJpb3JpdHk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdF9vYmo7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdF9vYmogPSB7XG4gICAgICAgIGdldF9uYW1lLFxuICAgICAgICBzZXRfbmFtZSxcbiAgICAgICAgZ2V0X2RldGFpbHMsXG4gICAgICAgIHNldF9kZXRhaWxzLFxuICAgICAgICBnZXRfaWQsXG4gICAgICAgIGdldF9kYXRlLFxuICAgICAgICBzZXRfZGF0ZSxcbiAgICAgICAgZ2V0X3N0YXR1cyxcbiAgICAgICAgc2V0X3N0YXR1cyxcbiAgICAgICAgZ2V0X3ByaW9yaXR5LFxuICAgICAgICBzZXRfcHJpb3JpdHksXG4gICAgICAgIHRvX2pzb24sXG4gICAgICAgIGZyb21fanNvbixcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc3VsdF9vYmo7XG59O1xuXG5cbmNvbnN0IGNyZWF0ZV9wcm9qZWN0ID0gZnVuY3Rpb24gKG5hbWUpe1xuXG4gICAgbGV0IF9uYW1lID0gbmFtZTtcbiAgICBsZXQgX2lkID0gZ2VuZXJlYXRlX2lkKCk7XG4gICAgbGV0IF90YXNrcyA9IHt9O1xuXG4gICAgY29uc3Qgc2V0X25hbWUgPSBmdW5jdGlvbiAobmFtZSkgeyBfbmFtZSA9IG5hbWU7IH07XG4gICAgY29uc3QgZ2V0X25hbWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfbmFtZTsgfTtcbiAgICBjb25zdCBnZXRfaWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfaWQ7IH07XG4gICAgY29uc3QgZ2V0X3Rhc2tzID0gZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhfdGFza3MpLm1hcChrZXkgPT4gX3Rhc2tzW2tleV0pO1xuICAgIH07XG4gICAgY29uc3QgYWRkX3Rhc2sgPSBmdW5jdGlvbiAodGFzayl7XG4gICAgICAgIC8vIEdpdmVzIHRoZSBvYmplY3QgdGhlIGFiaWxpdHkgdG8gcmVtb3ZlIGl0c2VsZi5cbiAgICAgICAgdGFzay5yZW1vdmVfc2VsZiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYoX3Rhc2tzW3Rhc2suZ2V0X2lkKCldICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90YXNrc1t0YXNrLmdldF9pZCgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3Rhc2tzW3Rhc2suZ2V0X2lkKCldID0gdGFzaztcbiAgICB9O1xuICAgIGNvbnN0IGdldF90YXNrID0gZnVuY3Rpb24gKHRfaWQpe1xuICAgICAgICByZXR1cm4gX3Rhc2tzW3RfaWRdO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlX3Rhc2sgPSBmdW5jdGlvbiAodF9pZCl7XG4gICAgICAgIGlmKF90YXNrc1t0X2lkXSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGVsZXRlIF90YXNrc1t0X2lkXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0b19qc29uID0gZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lOiBfbmFtZSxcbiAgICAgICAgICAgIGlkOiBfaWQsXG4gICAgICAgICAgICB0YXNrczogSlNPTi5zdHJpbmdpZnkoX3Rhc2tzLCAoa2V5LCB2YWx1ZSk9PntcbiAgICAgICAgICAgICAgICBpZih2YWx1ZVsndG9fanNvbiddICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9fanNvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZyb21fanNvbiA9IGZ1bmN0aW9uKGpzb24pe1xuICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGpzb24sIChrZXksIHZhbHVlKT0+e1xuICAgICAgICAgICAgaWYoa2V5ID09PSAndGFza3MnKXtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgcHJvcCBpbiBvYmope1xuICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBjcmVhdGVfdGFzaygpLmZyb21fanNvbihvYmpbcHJvcF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBfbmFtZSA9IG9iai5uYW1lO1xuICAgICAgICBfaWQgPSBvYmouaWQ7XG4gICAgICAgIF90YXNrcyA9IG9iai50YXNrcztcbiAgICAgICAgcmV0dXJuIHJlc3VsdF9vYmo7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdF9vYmogPSB7XG4gICAgICAgIHNldF9uYW1lLFxuICAgICAgICBnZXRfbmFtZSxcbiAgICAgICAgZ2V0X2lkLFxuICAgICAgICBnZXRfdGFza3MsXG4gICAgICAgIGFkZF90YXNrLFxuICAgICAgICBnZXRfdGFzayxcbiAgICAgICAgcmVtb3ZlX3Rhc2ssXG4gICAgICAgIHRvX2pzb24sXG4gICAgICAgIGZyb21fanNvbixcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiByZXN1bHRfb2JqO1xufTtcblxuXG5jb25zdCBhcHAgPSAoZnVuY3Rpb24gKHRpdGxlKXtcbiAgICBjb25zdCBfdGl0bGUgPSB0aXRsZTtcbiAgICBjb25zdCBfc2VjdGlvbnMgPSB7XG4gICAgICAgIGluYm94OiBjcmVhdGVfcHJvamVjdChcIkluYm94XCIpLFxuICAgICAgICB0b2RheTogY3JlYXRlX3Byb2plY3QoXCJUb2RheVwiKSxcbiAgICAgICAgcHJvamVjdHM6IHt9LFxuICAgIH07XG5cbiAgICBjb25zdCBnZXRfdGl0bGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGl0bGU7IH07XG4gICAgY29uc3QgZ2V0X3NlY3Rpb24gPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gX3NlY3Rpb25zW25hbWVdO307XG4gICAgY29uc3QgYWRkX3Byb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkgeyBcbiAgICAgICAgcHJvamVjdC5yZW1vdmVfc2VsZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKF9zZWN0aW9ucy5wcm9qZWN0c1twcm9qZWN0LmdldF9pZCgpXSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfc2VjdGlvbnMucHJvamVjdHNbcHJvamVjdC5nZXRfaWQoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF9zZWN0aW9ucy5wcm9qZWN0c1twcm9qZWN0LmdldF9pZCgpXSA9IHByb2plY3Q7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVfcHJvamVjdCA9IGZ1bmN0aW9uIChwX2lkKXtcbiAgICAgICAgaWYoX3NlY3Rpb25zLnByb2plY3RzW3BfaWRdICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBkZWxldGUgX3NlY3Rpb25zLnByb2plY3RzW3BfaWRdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBnZXRfcHJvamVjdCA9IGZ1bmN0aW9uIChwX2lkKSB7XG4gICAgICAgIHJldHVybiBfc2VjdGlvbnMucHJvamVjdHNbcF9pZF07XG4gICAgfTtcblxuICAgIGNvbnN0IGdldF9wcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKF9zZWN0aW9ucy5wcm9qZWN0cykubWFwKGtleSA9PiBfc2VjdGlvbnMucHJvamVjdHNba2V5XSk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0X3RpdGxlLFxuICAgICAgICBnZXRfc2VjdGlvbixcbiAgICAgICAgYWRkX3Byb2plY3QsXG4gICAgICAgIHJlbW92ZV9wcm9qZWN0LFxuICAgICAgICBnZXRfcHJvamVjdCxcbiAgICAgICAgZ2V0X3Byb2plY3RzLFxuICAgIH07XG5cbn0pKFwiVE9ETyBMSVNUXCIpO1xuXG5leHBvcnQge1xuICAgIGFwcCxcbiAgICBjcmVhdGVfcHJvamVjdCxcbiAgICBjcmVhdGVfdGFzayxcbn07Il0sIm5hbWVzIjpbImdldFJhbmRvbVZhbHVlcyIsInJuZHM4IiwiVWludDhBcnJheSIsInJuZyIsImNyeXB0byIsImJpbmQiLCJtc0NyeXB0byIsIkVycm9yIiwidXVpZCIsImJ5dGVUb0hleCIsImkiLCJwdXNoIiwidG9TdHJpbmciLCJzdWJzdHIiLCJvcHRpb25zIiwiYnVmIiwib2Zmc2V0Iiwicm5kcyIsInJhbmRvbSIsImFyciIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiVHlwZUVycm9yIiwiY3JlYXRlX3Rhc2siLCJuYW1lIiwiZGV0YWlscyIsImRhdGUiLCJzdGF0dXMiLCJwcmlvcml0eSIsIl9uYW1lIiwiX2lkIiwiX2RldGFpbHMiLCJfZGF0ZSIsIl9zdGF0dXMiLCJfcHJpb3JpdHkiLCJyZXN1bHRfb2JqIiwiZ2V0X25hbWUiLCJzZXRfbmFtZSIsImdldF9kZXRhaWxzIiwic2V0X2RldGFpbHMiLCJnZXRfaWQiLCJnZXRfZGF0ZSIsInNldF9kYXRlIiwiZ2V0X3N0YXR1cyIsInNldF9zdGF0dXMiLCJnZXRfcHJpb3JpdHkiLCJzZXRfcHJpb3JpdHkiLCJ0b19qc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoaXMiLCJrZXkiLCJ2YWx1ZSIsImZpbmQiLCJrIiwiZnJvbV9qc29uIiwianNvbiIsIm9iaiIsInBhcnNlIiwiY3JlYXRlX3Byb2plY3QiLCJfdGFza3MiLCJnZXRfdGFza3MiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiYWRkX3Rhc2siLCJ0YXNrIiwicmVtb3ZlX3NlbGYiLCJnZXRfdGFzayIsInRfaWQiLCJyZW1vdmVfdGFzayIsImlkIiwidGFza3MiLCJwcm9wIl0sInNvdXJjZVJvb3QiOiIifQ==
