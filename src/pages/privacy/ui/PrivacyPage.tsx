import { Typography } from '@mui/material';
import { UiPageSection } from '@/shared/ui/ui-page-section';

export const PrivacyPage = () => {
  return (
    <UiPageSection>
      <Typography variant="h4" fontWeight={800}>
        Privacy
      </Typography>

      <Typography>Сервис не требует регистрации и не собирает персональные данные.</Typography>

      <Typography>
        По умолчанию вы выбираете город вручную. Автоопределение геолокации возможно только по
        явному действию пользователя.
      </Typography>

      <Typography color="text.secondary">
        Мы не храним историю запросов и не используем сторонние трекеры.
      </Typography>
    </UiPageSection>
  );
};
