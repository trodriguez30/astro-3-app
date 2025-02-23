
import { useContext } from 'react';
import { SortContext } from '@/context/SortProvider';

export const useSort = () => {
const context = useContext(SortContext);
  if (!context) {
    throw new Error('useSort must be used within a SortProvider');
  }
  return context;
};