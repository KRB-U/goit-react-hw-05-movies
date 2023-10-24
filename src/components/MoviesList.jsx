import { Link } from 'react-router-dom';

export default function MovieList({ trendMovies }) {
  return (
    <ul>
      {trendMovies.map(
        ({ id, title, overview, original_title, original_name, name }) => {
          const displayTitle = title || original_title || name || original_name;
          return (
            <Link key={id} to={`/Movie/${id}`}>
              <li
                key={id}
                style={{ marginLeft: '40px', listStyleType: 'disc' }}
              >
                {displayTitle}
              </li>
            </Link>
          );
        }
      )}
    </ul>
  );
}
