require "test_helper"

class CommentRepliesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @comment_reply = comment_replies(:one)
  end

  test "should get index" do
    get comment_replies_url, as: :json
    assert_response :success
  end

  test "should create comment_reply" do
    assert_difference('CommentReply.count') do
      post comment_replies_url, params: { comment_reply: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show comment_reply" do
    get comment_reply_url(@comment_reply), as: :json
    assert_response :success
  end

  test "should update comment_reply" do
    patch comment_reply_url(@comment_reply), params: { comment_reply: {  } }, as: :json
    assert_response 200
  end

  test "should destroy comment_reply" do
    assert_difference('CommentReply.count', -1) do
      delete comment_reply_url(@comment_reply), as: :json
    end

    assert_response 204
  end
end
