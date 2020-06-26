import { AlertService } from "./app/alert.service.js";
import { ComponentService } from "./app/component.service.js";
import { run } from "./app/app.js";

import './main.scss';

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
