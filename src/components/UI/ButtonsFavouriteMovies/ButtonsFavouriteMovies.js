import React from 'react'

import Button from '@material-ui/core/Button';
import AddedFavoriteIcon from '@material-ui/icons/Favorite' 
import FavoriteIcon from '@material-ui/icons/FavoriteBorder'

const RemoveButtonFavouriteMovie = (remove, movieFromCurrentList ) => (
    <Button size="small" color="primary" onClick={() => remove(movieFromCurrentList)}>
        <AddedFavoriteIcon />
        Delete from Favorites
    </Button>
)	
const AddButtonFavouriteMovie = (add, movieFromCurrentList) => (
    <Button size="small" color="primary" onClick={() => add(movieFromCurrentList)}>
        <FavoriteIcon />
        Share to Favorites
    </Button>
)

export const AddFavouriteMovie = (favouriteMovies, movieFromCurrentList, add) => {
    console.log(`in addButton current movie`, movieFromCurrentList)
    if ( favouriteMovies.length === 0 ) {
        return (
            <div>
                { AddButtonFavouriteMovie(add, movieFromCurrentList) }
            </div>
        )
    }

    if ( !favouriteMovies.some( movie => movie.id === movieFromCurrentList.id ) ) {
        return (
            <div>
                { AddButtonFavouriteMovie(add, movieFromCurrentList) }
            </div>
        )
    }
}
export const RemoveFavoriteMovie = (favouriteMovies, movieFromCurrentList, remove) => favouriteMovies.map(movie => {
    if (movie.id === movieFromCurrentList.id) {
        return ( 
            <div>
                { RemoveButtonFavouriteMovie(remove, movieFromCurrentList)}
            </div>
        )	
    } 
}  )