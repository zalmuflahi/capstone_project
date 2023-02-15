require "test_helper"

class ReplyLikesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reply_like = reply_likes(:one)
  end

  test "should get index" do
    get reply_likes_url, as: :json
    assert_response :success
  end

  test "should create reply_like" do
    assert_difference('ReplyLike.count') do
      post reply_likes_url, params: { reply_like: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show reply_like" do
    get reply_like_url(@reply_like), as: :json
    assert_response :success
  end

  test "should update reply_like" do
    patch reply_like_url(@reply_like), params: { reply_like: {  } }, as: :json
    assert_response 200
  end

  test "should destroy reply_like" do
    assert_difference('ReplyLike.count', -1) do
      delete reply_like_url(@reply_like), as: :json
    end

    assert_response 204
  end
end
