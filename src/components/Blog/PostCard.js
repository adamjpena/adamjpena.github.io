import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import styles from './PostCard.module.scss';
import { Grid, Cell, GRID_CONSTANTS } from 'components/Grid';
import { GatsbyImage, Heading } from 'components/Layout';

const PostCard = ({
  description,
  heroImage,
  isHighlight = false,
  slug,
  title,
}) => {
  const cellWidths = {
    xs: isHighlight ? 2 : 1,
    md: isHighlight ? 1 : 2,
  };

  return (
    <div
      className={cx(styles.postCard, {
        [styles.postCardHighlight]: isHighlight,
      })}
    >
      <Grid margin={0} gap={GRID_CONSTANTS.gapMedium} columns={2}>
        <Cell width={cellWidths}>
          <div className={styles.imgContainer}>
            <Link className={styles.imgLink} to={slug}>
              <GatsbyImage
                classes={styles.img}
                alt={heroImage.name}
                fluid={heroImage.fluid}
              />
            </Link>
          </div>
        </Cell>
        <Cell width={cellWidths}>
          <Link to={slug}>
            <Heading
              classes={styles.postCard__title}
              level={isHighlight ? 1 : 4}
            >
              {title}
            </Heading>
          </Link>
          <p>{description.childMarkdownRemark.rawMarkdownBody}</p>
        </Cell>
      </Grid>
    </div>
  );
};

export default PostCard;