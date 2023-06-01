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
  fetchFavorites,
  fetchNotices,
  fetchUsersNotices,
} from 'redux/noticesPage/operations';
import { NoticesCategoriesItems } from '../CategoriesItems/CategoriesItems';
import { CategoriesList } from './NoticesCategoriesList.styled';
import { useAuth } from 'hooks';
import NoticeModal from 'components/ReusableComponents/Modal/NoticeModal/NoticeModal';
// import { toast } from 'react-toastify';

const NoticesCategoriesList = () => {
  const { isLoggedIn } = useAuth();
  const { categoryName } = useParams();
  const [currentReadMore, setCurrentReadMore] = useState(null);
  const [favoriteItem, setFavoriteItem] = useState(null);
  const favorites = useSelector(selectFavorite);
  const own = useSelector(selectOwn);
  const notices = useSelector(selectNotices);
  const [pets, setPets] = useState();
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const favorits = useSelector(selectFavorite);

  useEffect(() => {
    if (!query) {
      setSearchParams('');
      return;
    }
    setSearchParams({ query });
  }, [setSearchParams, query]);

  useEffect(() => {
    if (!currentReadMore) {
      return;
    }
    setFavoriteItem(favorits.find(item => item._id === currentReadMore[0]._id));
  }, [currentReadMore]);

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
  const openModal = id => {
    const filtered = pets.filter(({ _id }) => id === _id);
    setCurrentReadMore(filtered);
  };
  const handleFavorite = e => {
    e.preventDefault();
    if (!isLoggedIn) {
      // toast('Sorry, this option is available only for authorized users');
      return;
    }
    if (favoriteItem) {
      dispatch(deleteFromFavorite(currentReadMore[0]._id));
      return;
    }
    console.log(favoriteItem);
    dispatch(addToFavorite(currentReadMore[0]._id));
  };

  return (
    <>
      <CategoriesList>
        {pets.map(pet => (
          <NoticesCategoriesItems
            pet={pet}
            key={pet._id}
            openModal={openModal}
          />
        ))}
        {currentReadMore && (
          <NoticeModal
            handleFavorite={handleFavorite}
            pet={currentReadMore[0]}
          ></NoticeModal>
        )}
      </CategoriesList>
    </>
  );
};

export default NoticesCategoriesList;
