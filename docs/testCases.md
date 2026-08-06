# TodoMVC Test Cases
## Test Environment

| Item            | Value                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------- |
| Application     | TodoMVC (React)                                                                          |
| URL             | [https://todomvc.com/examples/react/dist/#/](https://todomvc.com/examples/react/dist/#/) |
| Browser         | Chromium                                                                                 |
| Testing Type    | Functional Testing                                                                       |
| Automation Tool | Playwright                                                                               |

## TC001 - Verify Application Loads Successfully

| Field            | Description                                |
| ---------------- | ------------------------------------------ |
| **Test Case ID** | TC001                                      |
| **Feature**      | Homepage                                   |
| **Title**        | Verify TodoMVC homepage loads successfully |
| **Precondition** | Browser is open                            |
| **Priority**     | High                                       |

| Step | Action           | Expected Result             |
| ---- | ---------------- | --------------------------- |
| 1    | Open TodoMVC URL | Homepage loads successfully |
| 2    | Check page title | Title is **TodoMVC: React** |

## TC002 - Create Todo Items

| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC002           |
| **Feature**      | Todo Management |
| **Priority**     | High            |

| Step | Action                 | Expected Result      |
| ---- | ---------------------- | -------------------- |
| 1    | Open TodoMVC           | Homepage displayed   |
| 2    | Add "sort videos"      | Todo appears in list |
| 3    | Add "edit pictures"    | Todo appears in list |
| 4    | Add "post pictures"    | Todo appears in list |
| 5    | Add "design packaging" | Todo appears in list |

## TC003 - Complete a Todo
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC003           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Step | Action              | Expected Result          |
| ---- | ------------------- | ------------------------ |
| 1    | Create four todos   | Four todos displayed     |
| 2    | Check "sort videos" | Task marked completed    |
| 3    | View Active filter  | Completed task is hidden |

## TC004 - Edit Todo
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC004           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Step | Action                                          | Expected Result        |
| ---- | ----------------------------------------------- | ---------------------- |
| 1    | Create todos                                    | Todos displayed        |
| 2    | Double-click "design packaging"                 | Edit mode activated    |
| 3    | Change text to "design floorplan and packaging" | Updated text displayed |

## TC005 - Delete Todo
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC005           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Step | Action                     | Expected Result     |
| ---- | -------------------------- | ------------------- |
| 1    | Hover over "post pictures" | Delete icon appears |
| 2    | Click Delete               | Todo removed        |

## TC006 - Clear Completed Todos
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC006           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC006           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

## TC007 - Verify Remaining Todo Count
| Field            | Description     |
| ---------------- | --------------- |
| **Test Case ID** | TC007           |
| **Feature**      | Todo Management |
| **Priority**     | Medium          |

| Step | Action                 | Expected Result           |
| ---- | ---------------------- | ------------------------- |
| 1    | Create four todos      | Four todos displayed      |
| 2    | Complete one todo      | Completed count updated   |
| 3    | Delete one active todo | Remaining count updated   |
| 4    | Clear completed        | Remaining todos displayed |

## TC008 - Demo Failing Test
| Field            | Description |
| ---------------- | ----------- |
| **Test Case ID** | TC008       |
| **Feature**      | Reporting   |
| **Priority**     | Low         |

| Step | Action                    | Expected Result  |
| ---- | ------------------------- | ---------------- |
| 1    | Perform CRUD operations   | Two todos remain |
| 2    | Assert three todos remain | Test fails       |
