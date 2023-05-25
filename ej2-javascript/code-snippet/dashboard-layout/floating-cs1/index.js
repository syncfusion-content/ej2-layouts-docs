// initialize dashboardlayout component
var dashboard  = new ej.layouts.DashboardLayout({
    cellSpacing: [10, 10],
    allowFloating: false,
    cellAspectRatio: 100/75,
    columns: 6,
    panels: [{'sizeX': 2, 'sizeY': 2,'row': 1, 'col': 0, content:'<div class="content">0</div>'},
    {'sizeX': 2, 'sizeY': 2, 'row': 2,'col': 2, content:'<div class="content">1</div>'},
    {'sizeX': 2, 'sizeY': 2, 'row': 3, 'col': 4, content:'<div class="content">2</div>'}]
    });
// render initialized dashboardlayout
dashboard.appendTo('#dashboard_default');

var resetPanels = dashboard.serialize();
resetPanels[0].content = '<div class="content">0</div>';
resetPanels[1].content = '<div class="content">1</div>';
resetPanels[2].content = '<div class="content">2</div>';

var toggleBtn = new ej.buttons.Button({
  cssClass: "e-flat e-primary e-outline",
  content: "Enable Floating",
  isToggle: true
});

toggleBtn.appendTo("#toggle");

document.getElementById('toggle').onclick = function() {
    var panels = [];
    if (toggleBtn.content == "Disable Floating and Reset") {
        toggleBtn.content = 'Enable Floating';
        dashboard.allowFloating = false;
        dashboard.panels = resetPanels;
    } else {
        toggleBtn.content = 'Disable Floating and Reset';
        dashboard.allowFloating = true;
    }
};


