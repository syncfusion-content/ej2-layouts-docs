

import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize dashboardlayout component
let dashboard: DashboardLayout = new DashboardLayout({
    cellSpacing: [20, 20],
    columns: 3,
    panels: [
        { "row": 0, "col": 0, content: '<div class="content">1</div>' },
        { "row": 0, "col": 1, content: '<div class="content">2</div>' },
        { "row": 0, "col": 2, content: '<div class="content">3</div>' },
        { "row": 1, "col": 0, content: '<div class="content">4</div>' },
        { "row": 1, "col": 1, content: '<div class="content">5</div>' },
        { "row": 1, "col": 2, content: '<div class="content">6</div>' }
    ]
});
// render initialized dashboardlayout
dashboard.appendTo('#dashboard_default');


