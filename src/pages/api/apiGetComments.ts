import { NextApiRequest, NextApiResponse } from "next";
import awaitConnection from "../../lib/Connection";
import Comment from "../../entities/Comment.entity";

export type ApiGetCommentsRequest = {

};

export type ApiGetCommentsResponse = {
	success: boolean;

	comments: Comment[],
}

export default async (req: NextApiRequest, res: NextApiResponse<ApiGetCommentsRequest>) => {
	const connection = await awaitConnection();

	const commentRepo = connection.getRepository(Comment);

	const comments = await commentRepo.find({ 
		select: [
			"content", 
			"createdDate"
		], 
		order: {createdDate: "DESC"}
	});

	res.json({
		success: true,

		comments: comments,
	});
}