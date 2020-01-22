const validator = require('validator');


console.log(validator.isURL("https://www.youtub.com/watch?v=lvsvj00vGvo"),{
    host_whitelist:['youtube.com'],
    host_blacklist:['*.com'],
    require_host:true
})