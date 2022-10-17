import { Component } from 'react';
import { axiosPicture } from '../../Services/picture-api';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ButtonPagination } from 'components/Button/Button';
import { Modal } from '../Modal/Modal';
import ThreeDots from '../Loader/Loader';
// import {Note} from './Notification';
import s from './ImageGallery.module.css';

export class Gallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    page: 1,
    currentImage: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      try {
        this.setState({ isLoading: true, page: 1 });
        const pictureData = await axiosPicture(nextQuery);
        this.setState({ gallery: pictureData });
       this.props.onUpdate(pictureData, this.state.isLoading, this.state.error);
      } catch (err) {
        this.setState({ error: err.message });
        console.log(this.state.error);
        console.log(err.message);
      } finally {
        this.setState({ isLoading: false });
        
      }
    }
    if (prevPage !== nextPage && nextPage !== 1) {
      try {
        this.setState({ isLoading: true, error: '' });
        const pictureData = await axiosPicture(
          this.props.searchQuery,
          this.state.page
         
        );

        this.setState(({ gallery }) => ({
          gallery: [...gallery, ...pictureData],
        }));
        this.props.onUpdate(pictureData, this.state.isLoading, this.state.error);
      } catch (err) {
        this.setState({ error: err.message });
      } finally {
        this.setState({ isLoading: false });
        
      }
    }   
  }

  pagination = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  updateCurrentImage = data => {
    this.setState({ currentImage: data });
  };
  closeModal = () => {
    this.setState({ currentImage: null });
  };
  render() {
    const { page, gallery, currentImage, isLoading, error } = this.state;

    return (
      <>
      {/* {!isLoading && !error && gallery.length<1 && <Note/>} */}
       {error && <span className={s.error}>Oops! Something went wrong. {error}</span>}
        <ul className={s.gallery}>
          {!!gallery.length && (
            <GalleryItem
              gallery={gallery}
              openModal={this.updateCurrentImage}
            />
          )}
        </ul>
        {isLoading && <ThreeDots />}
        {!!gallery.length &&
          gallery.length >= page * 12 /* && <ThreeDots />  */ && (
            <ButtonPagination pagination={this.pagination} />
          )}
        
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
