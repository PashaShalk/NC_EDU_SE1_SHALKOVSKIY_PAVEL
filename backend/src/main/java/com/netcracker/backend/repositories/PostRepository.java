package com.netcracker.backend.repositories;

import com.netcracker.backend.model.Post;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends PagingAndSortingRepository<Post, Long> {
    List<Post> findAllByAuthorNickname(String authorNickname, Pageable pageable);
    Post findByID(Long ID);

    @Query(value = "SELECT p.id, p.date, p.description, p.user_id FROM mo_posts p " +
            "JOIN mo_user_subscriptions s " +
            "ON p.user_id = s.subscriber_id AND s.channel_id = ?1",
            nativeQuery = true)
//    @Query("FROM Post post left join User user where post.author.ID = 1")
//    @Query("FROM Post post WHERE (SELECT user FROM User user WHERE user.ID =: userID) in post.author.subscriptions")
//    @Query("FROM Post post WHERE post.author IN (SELECT user.subscribers FROM User user WHERE user.ID =:userID)")
//    @Query("FROM Post")
    List<Post> findUserFeed(@Param("ID") Long ID, Pageable pageable);

    List<Post> findAllByDateAfter(Date data, Pageable pageable);

    @Query(value = "SELECT p.id, p.date, p.description, p.user_id FROM mo_posts p " +
            "JOIN mo_posts_hashtags ph " +
            "JOIN mo_hashtags h " +
            "ON p.id = ph.post_id and ph.hashtag_id = h.id and h.text = ?1",
            nativeQuery = true)
    List<Post> findAllByHashtag(@Param("hashtag") String hashtag, Pageable pageable);
}
