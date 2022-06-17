import { useState } from '@storybook/addons';
import { useCallback } from 'react';
import { DefaultHeader } from '@/components/organisms/header/default-header.organism';

type Props = {};

export const DefaultHeaderEcosystems: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuButtonClickHandling = useCallback(() => {
    setIsOpen((pre) => !pre);
  }, []);

  return <DefaultHeader isMenuOpen={isOpen} menuButtonClickHandling={menuButtonClickHandling} />;
};
