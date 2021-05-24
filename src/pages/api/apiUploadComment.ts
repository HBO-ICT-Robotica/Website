import { NextApiRequest, NextApiResponse } from "next";
import awaitConnection from "../../lib/Connection";
import Comment from "../../entities/Comment.entity";

export type ApiUploadCommentRequest = {
	content: string, 
};

export type ApiUploadCommentResponse = {
	success: boolean;
}

export default async (req: NextApiRequest, res: NextApiResponse<ApiUploadCommentResponse>) => {
	const connection = await awaitConnection();

	const body: ApiUploadCommentRequest = JSON.parse(req.body); 

	const commentRepo = connection.getRepository(Comment);

	const comment = new Comment();
	comment.content = body.content;

	commentRepo.save(comment);

	res.json({
		success: true,
	});
}