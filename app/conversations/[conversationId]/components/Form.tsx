'use client';
import { HiPaperAirplane, HiPhoto, HiPlus } from "react-icons/hi2";
import { FiAlertCircle } from 'react-icons/fi';

// Inside your component
import MessageInput from "./MessageInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import useConversation from "@/app/hooks/useConversation";
import { MdOutlineGroupAdd } from "react-icons/md";
import SmsModal from "@/app/components/modals/SmsModal";
import { useState } from "react";
import GroupChatModal from "@/app/components/modals/GroupChatModal";
import AlertModal from "@/app/components/modals/AlertModal";

const Form = () => {
  const { conversationId } = useConversation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true });
    axios.post('/api/messages', {
      ...data,
      conversationId: conversationId
    });
  }

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      image: result.info.secure_url,
      conversationId: conversationId
    });
  }

  return (
    <div>
      <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
        <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset="jwlatbzs">
          <HiPhoto size={30} className="text-sky-500" />
        </CldUploadButton>
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full">
          <MessageInput id="message" register={register} errors={errors} required placeholder="Write a message" />
          <button type="submit" className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition">
            <HiPaperAirplane size={18} className="text-white" />
          </button>
          <SmsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <div onClick={() => setIsModalOpen(true)} className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition">
            <HiPlus size={20}
            />
          </div>
          <AlertModal isOpen={isAlertModalOpen} onClose={() => setIsAlertModalOpen(false)} />

          <div onClick={() => setIsAlertModalOpen(true)} className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition">
            <FiAlertCircle size={20} color="red" />

          </div>
          {/* <SmsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(true)} /> */}
        </form>
      </div>

    </div>
  );
}

export default Form;