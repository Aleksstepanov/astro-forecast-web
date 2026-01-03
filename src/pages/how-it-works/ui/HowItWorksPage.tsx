import { Typography } from '@mui/material';
import { UiPageSection } from '@/shared/ui/ui-page-section';

export const HowItWorksPage = () => {
  return (
    <UiPageSection>
      <Typography variant="h4" fontWeight={800}>
        Как это работает
      </Typography>

      <Typography>
        Сервис анализирует погодные параметры и рассчитывает пригодность условий для астрономических
        наблюдений.
      </Typography>

      <Typography>
        Мы учитываем облачность, влажность, ветер и ряд производных коэффициентов, после чего
        формируем интегральный показатель.
      </Typography>

      <Typography color="text.secondary">
        Искусственный интеллект здесь используется только для объяснения результата человеческим
        языком. Если ИИ недоступен — вы всё равно получите расчёты.
      </Typography>
    </UiPageSection>
  );
};
