// CORE
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
// SELECTORS
import { selectHotelsItems } from '../../../engine/core/hotels/selectors';
// LINKS
import { links } from '../../../engine/config/links';

export const useList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectHotelsItems);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(push(links.main));
    }
  }, [dispatch, items]);
  return { items };
};
