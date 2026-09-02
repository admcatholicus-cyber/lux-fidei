'use client';

import { useState, useMemo, useCallback } from 'react';
import { LITURGICAL_WEEKS } from '../_data/liturgicalWeeks';
import { getCurrentWeekId } from '../_lib/liturgicalCalendar';
import Wheel from './Wheel';
import WeekModal from './WeekModal';
import CalendarInfo from './CalendarInfo';

export default function LiturgicalCalendar() {
  const currentWeekId = useMemo(() => getCurrentWeekId(), []);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedWeek = useMemo(
    () => LITURGICAL_WEEKS.find((w) => w.id === selectedId) ?? null,
    [selectedId]
  );

  const handleSelectWeek = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedId(null);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 px-4 py-8">
      <Wheel
        weeks={LITURGICAL_WEEKS}
        currentWeekId={currentWeekId}
        selectedWeekId={selectedId}
        onSelectWeek={handleSelectWeek}
      />

      <WeekModal
        week={selectedWeek}
        isCurrent={selectedWeek?.id === currentWeekId}
        onClose={handleClose}
      />

      <CalendarInfo />
    </div>
  );
}