webpackHotUpdate("main",{

/***/ "./src/components/AdminView/Employees/Employees.tsx":
/*!**********************************************************!*\
  !*** ./src/components/AdminView/Employees/Employees.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tmmm4_Desktop_Team_Embark_Front_bark_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Employee_SingleEmployee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Employee/SingleEmployee */ "./src/components/AdminView/Employee/SingleEmployee.tsx");
/* harmony import */ var _EmployeesFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployeesFilter */ "./src/components/AdminView/Employees/EmployeesFilter.tsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _helpers_elastic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/elastic */ "./src/helpers/elastic.tsx");

var _jsxFileName = "/Users/tmmm4/Desktop/Team Embark/Front/bark/src/components/AdminView/Employees/Employees.tsx";







const Employees = ({
  employees,
  tasks
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_tmmm4_Desktop_Team_Embark_Front_bark_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        employeesDidPopulate = _useState2[0],
        setEmployeesDidPopulate = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(employees),
        _useState4 = Object(_Users_tmmm4_Desktop_Team_Embark_Front_bark_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        filtered = _useState4[0],
        setFiltered = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(employees),
        _useState6 = Object(_Users_tmmm4_Desktop_Team_Embark_Front_bark_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        elasticced = _useState6[0],
        setElasticced = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        _useState8 = Object(_Users_tmmm4_Desktop_Team_Embark_Front_bark_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        filter = _useState8[0],
        setFilter = _useState8[1];

  if (employees.length !== 0 && !employeesDidPopulate) {
    setFiltered(employees);
    setElasticced(employees);
    setEmployeesDidPopulate(true);
  }

  const handleFilter = emId => {
    const filteredEmployees = emId === -1 ? employees : employees.filter(employee => employee.emId === emId);
    setFiltered(filteredEmployees);
    setElasticced(Object(_helpers_elastic__WEBPACK_IMPORTED_MODULE_6__["elastic"])(filter, filteredEmployees, ["fullName"]));
  };

  const handleElastic = filter => {
    const filterResults = Object(_helpers_elastic__WEBPACK_IMPORTED_MODULE_6__["elastic"])(filter, filtered, ["fullName"]);
    setElasticced(filterResults);
    setFilter(filter);
  };

  const employeesEl = employees ? elasticced.map((employee, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Employee_SingleEmployee__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: i,
    employee: employee,
    tasks: tasks.filter(task => task.employeeId === employee.id),
    focus: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })) : null;

  if (filtered && filtered.length < 0) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "admin-all-tasks-container six wide column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "employees-filter-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      icon: "search",
      placeholder: "Search...",
      className: "large",
      onChange: e => handleElastic(e.target.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EmployeesFilter__WEBPACK_IMPORTED_MODULE_4__["default"], {
      handleEmFilter: handleFilter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, employeesEl));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, "NO RESULTS");
  }
};

const mapStateToProps = state => ({
  employees: state.employees,
  tasks: state.tasks
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Employees));

/***/ })

})
//# sourceMappingURL=main.c06ce7e5081c52700839.hot-update.js.map