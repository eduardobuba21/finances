import { useState } from 'react';
// components
import { Fab } from '@src/components/default';
// sections
import { Sheet } from '@src/components/Sheet';
import { TransactionCreateEdit } from '../../TransactionCreateEdit';

// ----------------------------------------------------------------------

type Props = {
  isExtended: boolean;
};

// ----------------------------------------------------------------------

export function CreateFab({ isExtended }: Props) {
  const [isCreateScreenOpen, setIsCreateScreenOpen] = useState(false);

  return (
    <>
      <Fab
        icon="add"
        label="Adicionar"
        extended={isExtended}
        onPress={() => setIsCreateScreenOpen(true)}
        style={{
          right: 16,
          bottom: 16,
          position: 'absolute',
          zIndex: 100,
        }}
      />

      {isCreateScreenOpen && (
        <Sheet onClose={() => setIsCreateScreenOpen(false)}>
          <TransactionCreateEdit />
        </Sheet>
      )}
    </>
  );
}
