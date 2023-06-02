import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorite,
  selectNotices,
  selectOwn,
  selectQuery,
} from 'redux/noticesPage/selectors';
import {
  addToFavorite,
  deleteFromFavorite,
  deleteUserNotice,
  fetchFavorites,
  fetchNotices,
  fetchUsersNotices,
} from 'redux/noticesPage/operations';
import { NoticesCategoriesItems } from '../CategoriesItems/CategoriesItems';
import { CategoriesList } from './NoticesCategoriesList.styled';
import { useAuth } from 'hooks';
import NoticeModal from 'components/ReusableComponents/Modal/NoticeModal/NoticeModal';
import { toast } from 'react-toastify';
import RemoveModal from 'components/ReusableComponents/Modal/RemoveModal/RemoveModal';
import { ParkedPage } from '../ParkedPage/ParkedPage';

const NoticesCategoriesList = () => {
  const { isLoggedIn } = useAuth();
  const { categoryName } = useParams();

  const [activeNotice, setActiveNotice] = useState(null);
  const [modal, setModal] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  const [favoriteItem, setFavoriteItem] = useState(null);
  const favorites = useSelector(selectFavorite);
  const own = useSelector(selectOwn);
  const notices = useSelector(selectNotices);
  const [pets, setPets] = useState([]);
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();
  const favorits = useSelector(selectFavorite);

  useEffect(() => {
    if (!query) {
      setSearchParams('');
      return;
    }
    setSearchParams({ query });
  }, [setSearchParams, query]);

  useEffect(() => {
    if (!activeNotice) {
      return;
    }
    setFavoriteItem(favorits.find(item => item._id === activeNotice[0]._id));
  }, [activeNotice, favorits]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavorites(query));
      dispatch(fetchUsersNotices(query));
    }
    dispatch(fetchNotices({ categoryName, query }));
  }, [categoryName, dispatch, isLoggedIn, query]);


  useEffect(() => {
    switch (categoryName) {
      case 'favorite':
        setPets(favorites);
        break;
      case 'own':
        setPets(own);
        break;

      default:
        setPets(notices);
        break;
    }
  }, [categoryName, favorites, notices, own]);

  if (!pets) {
    return null;
  }

  const onDeleteOwn = () => {
    dispatch(deleteUserNotice(activeNotice[0]._id));
    setIsDeleted(true);
  };

  const openModal = (id, modalName) => {
    if (!id) {
      return;
    }
    switch (modalName) {
      case 'remove':
        setModal('remove');
        break;
      case 'learnMore':
        setModal('learnMore');
        break;
      default:
        break;
    }

    const filtered = pets.filter(({ _id }) => id === _id);
    setActiveNotice(filtered);
  };

  const handleFavorite = e => {
    e.preventDefault();
    if (!isLoggedIn) {
      toast('Sorry, this option is available only for authorized users');
      return;
    }
    if (favoriteItem) {
      dispatch(deleteFromFavorite(activeNotice[0]._id));
      return;
    }
    dispatch(addToFavorite(activeNotice[0]._id));
  };

  return (
    <>
     {pets.length>0 ?  <CategoriesList>
        {pets.map(pet => (
          <NoticesCategoriesItems
            pet={pet}
            key={pet._id}
            openModal={openModal}
            isDeleted={isDeleted}
          />
        ))}
        {modal === 'learnMore' && (
          <NoticeModal
            handleFavorite={handleFavorite}
            pet={activeNotice[0]}
          ></NoticeModal>
        )}
        {modal === 'remove' && (
          <RemoveModal
            approveHandle={onDeleteOwn}
            title={activeNotice[0].title}
          ></RemoveModal>
        )}
      </CategoriesList>:<ParkedPage/>}

    </>
  );
};

export default NoticesCategoriesList;
