import { useRef, useState } from 'react';
import { Button } from '#components/ui/button/button';
import { Popover } from '#components/ui/popover/popover';

export default function PopoversRoute() {
  const [defaultOpen, setDefaultOpen] = useState(false);
  const defaultToggleRef = useRef(null);

  return (
    <div className="flex flex-col items-center gap-y-8 text-center">
      <div className="space-y-2">
        <h3 className="flex items-center gap-x-4">
          <span>Default Popover:</span>
          <Button
            onPress={() => setDefaultOpen((state) => !state)}
            ref={defaultToggleRef}
          >
            Toggle
          </Button>
        </h3>
        <Popover
          triggerRef={defaultToggleRef}
          isOpen={defaultOpen}
          onOpenChange={setDefaultOpen}
        >
          <p className="p-4">This is my Popover Content</p>
        </Popover>
      </div>
    </div>
  );
}
