// Servlet Lifecycle Demo

const output = document.getElementById("output");
const lifecycleSteps = document.getElementById("lifecycleSteps");
const requestCounter = document.getElementById("requestCounter");
const configDisplay = document.getElementById("configDisplay");

// Servlet state
let servletState = {
  loaded: false,
  initialized: false,
  requestCount: 0,
  destroyed: false,
  config: {
    name: "HelloServlet",
    urlPattern: "/hello",
    initParams: {
      email: "admin@example.com",
    },
  },
};

// Utility functions
function print(line = "") {
  output.textContent += line + "\n";
  output.scrollTop = output.scrollHeight;
}

function printAndLog(line = "") {
  print(line);
  console.log(line);
}

function heading(title) {
  const line = "\n===== " + title + " =====";
  printAndLog(line);
}

function updateStepStatus(phase, status) {
  const step = document.querySelector(`.step[data-phase="${phase}"]`);
  if (!step) return;

  const badge = step.querySelector(".step-badge");

  // Remove all status classes
  step.classList.remove("active", "completed", "destroyed");
  badge.classList.remove(
    "badge-pending",
    "badge-active",
    "badge-completed",
    "badge-destroyed",
  );

  // Add new status
  if (status === "active") {
    step.classList.add("active");
    badge.classList.add("badge-active");
    badge.textContent = "Active";
  } else if (status === "completed") {
    step.classList.add("completed");
    badge.classList.add("badge-completed");
    badge.textContent = "Completed";
  } else if (status === "destroyed") {
    step.classList.add("destroyed");
    badge.classList.add("badge-destroyed");
    badge.textContent = "Destroyed";
  } else {
    badge.classList.add("badge-pending");
    badge.textContent = "Pending";
  }
}

function resetAllSteps() {
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => {
    const phase = step.dataset.phase;
    updateStepStatus(phase, "pending");
  });
}

// Lifecycle methods
function loadServlet() {
  heading("Loading & Instantiation");
  updateStepStatus("loading", "active");

  setTimeout(() => {
    printAndLog("→ Container loads servlet class: " + servletState.config.name);
    printAndLog("→ Creating servlet instance...");
    printAndLog("→ Servlet instance created successfully");
    servletState.loaded = true;
    updateStepStatus("loading", "completed");

    // Auto-proceed to init
    setTimeout(initServlet, 800);
  }, 1000);
}

function initServlet() {
  if (!servletState.loaded) {
    printAndLog("✗ Error: Servlet must be loaded first!");
    return;
  }

  heading("Initialization (init)");
  updateStepStatus("init", "active");

  setTimeout(() => {
    printAndLog("→ Calling init() method...");
    printAndLog("→ Reading init parameters:");

    for (const [key, value] of Object.entries(servletState.config.initParams)) {
      printAndLog(`   - ${key} = ${value}`);
    }

    printAndLog("→ Initializing database connections...");
    printAndLog("→ Loading configuration...");
    printAndLog("✓ Servlet initialized successfully");
    printAndLog("✓ Servlet is ready to serve requests");

    servletState.initialized = true;
    servletState.destroyed = false;
    updateStepStatus("init", "completed");
    updateStepStatus("service", "completed"); // Ready to service
  }, 1200);
}

function serviceRequest(method, params) {
  if (!servletState.initialized || servletState.destroyed) {
    printAndLog(
      "✗ Error: Servlet not initialized or has been destroyed. Start servlet first!",
    );
    return;
  }

  heading(`Service Request #${servletState.requestCount + 1} (${method})`);
  updateStepStatus("service", "active");

  setTimeout(() => {
    servletState.requestCount++;
    requestCounter.textContent = servletState.requestCount;

    const threadName = "http-nio-8080-exec-" + Math.floor(Math.random() * 10);

    printAndLog(`→ New ${method} request received`);
    printAndLog(`→ Thread: ${threadName}`);
    printAndLog(`→ Calling service() method...`);

    if (method === "GET") {
      printAndLog(`→ Delegating to doGet() method`);
    } else if (method === "POST") {
      printAndLog(`→ Delegating to doPost() method`);
    }

    printAndLog(`→ Request parameters: ${params}`);
    printAndLog(`→ Processing request...`);
    printAndLog(`→ Generating response`);
    printAndLog(`✓ Response sent to client`);
    printAndLog(`✓ Total requests served: ${servletState.requestCount}`);

    setTimeout(() => {
      updateStepStatus("service", "completed");
    }, 500);
  }, 800);
}

function destroyServlet() {
  if (!servletState.initialized) {
    printAndLog("✗ Error: Servlet not initialized");
    return;
  }

  heading("Destruction (destroy)");
  updateStepStatus("destroy", "active");

  setTimeout(() => {
    printAndLog("→ Calling destroy() method...");
    printAndLog("→ Closing database connections...");
    printAndLog("→ Releasing resources...");
    printAndLog(
      `→ Total requests served in lifetime: ${servletState.requestCount}`,
    );
    printAndLog("✓ Servlet destroyed successfully");
    printAndLog("✓ Servlet instance removed from memory");

    servletState.destroyed = true;
    servletState.initialized = false;
    updateStepStatus("destroy", "destroyed");
    updateStepStatus("service", "pending");
  }, 1000);
}

function resetLifecycle() {
  servletState = {
    loaded: false,
    initialized: false,
    requestCount: 0,
    destroyed: false,
    config: {
      name: servletState.config.name,
      urlPattern: servletState.config.urlPattern,
      initParams: { ...servletState.config.initParams },
    },
  };

  requestCounter.textContent = "0";
  output.textContent = "";
  resetAllSteps();
  printAndLog("System reset. Ready to start new servlet lifecycle.");
}

function applyConfiguration() {
  const name = document.getElementById("servletName").value;
  const pattern = document.getElementById("urlPattern").value;
  const paramKey = document.getElementById("initParamKey").value;
  const paramValue = document.getElementById("initParamValue").value;

  servletState.config.name = name;
  servletState.config.urlPattern = pattern;
  servletState.config.initParams = { [paramKey]: paramValue };

  configDisplay.innerHTML = `
    <strong>Current Configuration:</strong><br>
    Servlet Name: ${name}<br>
    URL Pattern: ${pattern}<br>
    Init Param: ${paramKey} = ${paramValue}
  `;

  heading("Configuration Updated");
  printAndLog("→ Servlet Name: " + name);
  printAndLog("→ URL Pattern: " + pattern);
  printAndLog("→ Init Parameter: " + paramKey + " = " + paramValue);
  printAndLog("✓ Configuration applied");
}

function simulateConcurrentRequests() {
  if (!servletState.initialized || servletState.destroyed) {
    printAndLog("✗ Error: Servlet not initialized. Start servlet first!");
    return;
  }

  heading("Simulating 5 Concurrent Requests");
  printAndLog("→ Multiple clients sending requests simultaneously...");
  printAndLog(
    "→ Same servlet instance handles all requests (different threads)",
  );
  print("");

  const methods = ["GET", "POST", "GET", "POST", "GET"];
  const delays = [100, 150, 200, 250, 300];

  methods.forEach((method, index) => {
    setTimeout(() => {
      const threadName = "http-nio-8080-exec-" + Math.floor(Math.random() * 10);
      servletState.requestCount++;
      requestCounter.textContent = servletState.requestCount;

      printAndLog(
        `[${threadName}] ${method} Request #${servletState.requestCount} → Processing`,
      );

      if (index === methods.length - 1) {
        setTimeout(() => {
          print("");
          printAndLog("✓ All concurrent requests completed");
          printAndLog(
            "✓ Single servlet instance served all requests using different threads",
          );
        }, 400);
      }
    }, delays[index]);
  });
}

// Event listeners
document.getElementById("startLifecycle").addEventListener("click", () => {
  if (servletState.initialized && !servletState.destroyed) {
    printAndLog("✗ Servlet already running. Reset first to restart.");
    return;
  }
  resetLifecycle();
  loadServlet();
});

document.getElementById("resetLifecycle").addEventListener("click", () => {
  resetLifecycle();
});

document.getElementById("sendRequest").addEventListener("click", () => {
  const method = document.getElementById("requestMethod").value;
  const params = document.getElementById("requestParam").value;
  serviceRequest(method, params);
});

document.getElementById("applyConfig").addEventListener("click", () => {
  applyConfiguration();
});

document.getElementById("simulateConcurrent").addEventListener("click", () => {
  simulateConcurrentRequests();
});

document.getElementById("destroyServlet").addEventListener("click", () => {
  destroyServlet();
});

// Initial setup
printAndLog("Servlet Container Ready");
printAndLog("Click 'Start Servlet' to begin lifecycle demonstration");
printAndLog("");
printAndLog("Available commands:");
printAndLog("  - Start Servlet: Load and initialize servlet");
printAndLog("  - Send Request: Process individual requests");
printAndLog("  - Simulate Concurrent: Test thread safety");
printAndLog("  - Destroy Servlet: Cleanup and shutdown");
