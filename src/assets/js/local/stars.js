import $ from 'jquery';

const MAX_STARS = 5;

$(() => {
  // .star-ratingを持つタグを取得
  const starRatingTag = $('.star-rating').get();

  // .star-ratingからdata-rate属性を取り出しその数によってレーティングを表示
  starRatingTag.forEach(elm => {
    const rate = Number($(elm).attr('data-rate'));

    let starsTag = '';
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < rate) {
        starsTag += '<div class="star-rating__bright">★</div>';
      } else {
        starsTag += '<div class="star-rating__dim">★</div>';
      }
    }

    $(elm).append(starsTag);
  });
});
