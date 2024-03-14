import { HistoryButtons } from '@/business/history/ui/history-buttons';
import { PresetMenu } from '@/business/preset/ui/preset-menu';
import { ThemeCodePreview } from '@/business/theme/ui/theme-code-preview';
import { ThemeModeSwitch } from '@/business/theme/ui/theme-mode-switch';
import { Separator } from '@/technical/ui/separator';

const FormActionsBar = () => {
  return (
    <div className="flex w-fit items-center space-x-2 px-6">
      <HistoryButtons />
      <Separator orientation="vertical" className="h-8" />
      <PresetMenu />
      <ThemeCodePreview />
      <Separator orientation="vertical" className="h-8" />
      <ThemeModeSwitch />
    </div>
  );
};

export { FormActionsBar };
