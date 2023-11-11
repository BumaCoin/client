import { goto } from '$app/navigation';
import { ROUTER } from '@/constants';
import deleteNotice from '@/services/notice/detail/deleteNotice';
import { createMutation } from '@tanstack/svelte-query';

const useDeleteNoticeMutation = () => {
	return createMutation({
		mutationFn: deleteNotice,
		onSuccess: () => goto(ROUTER.NOTICE)
	});
};

export default useDeleteNoticeMutation;
