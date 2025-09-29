//your JS code here. If required.
function functionName() {
  alert(arguments.callee.name);
}

functionName(); // Alerts: "functionName"

function AccioJob() {
  alert(arguments.callee.name);
}

AccioJob(); 
