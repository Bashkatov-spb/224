const React = require('react');

function HeroItem({ hero, user }) {
  const like = user && hero.Likes.filter((el) => el.user_id === user.id);

  return (
    <div className="card" style={{ width: '18rem', margin: '20px' }}>
      <img src={hero.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <a href={`/heroes/${hero.id}`} className="btn btn-primary">
          Подробнее
        </a>

        {user && (
          <>
            {like && like.length ? (
              <button data-id={hero.id} className="btn btn-success dfavorite" type="button">
                Удалить из избранного
              </button>
            ) : (
              <button data-id={hero.id} className="btn btn-success favorite" type="button">
                В избранное
              </button>
            )}
          </>
        )}
        {user && user.id === hero.user_id && (
          <>
            <button data-id={hero.id} className="btn btn-danger delete" type="button">
              Уничтожить
            </button>
            <a
              href={`/heroes/update-form/${hero.id}`}
              className="btn btn-warning update"
              type="button"
            >
              Изменить
            </a>
          </>
        )}
      </div>
    </div>
  );
}

module.exports = HeroItem;
