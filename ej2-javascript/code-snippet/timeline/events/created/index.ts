import { Timeline, TimelineItemModel } from '@syncfusion/ej2-layouts';

const orderStatus: TimelineItemModel[] = [
  { content: 'Ordered' },
  { content: 'Shipped' },
  { content: 'Out for delivery' },
  { content: 'Delivered' },
];

// Initializes the Timeline control
let timeline: Timeline = new Timeline({
  items: orderStatus,
  created: () => {
    //your required action here 
  }
});

// Render initialized Timeline.
timeline.appendTo("#timeline");