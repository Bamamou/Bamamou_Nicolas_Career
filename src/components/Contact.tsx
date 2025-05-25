import { useState, useEffect } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [showScheduleSuccessDialog, setShowScheduleSuccessDialog] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    topic: '',
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
          !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
          !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration is missing');
      }

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'bamamounicolas@gmail.com',
        }
      );

      if (response.status !== 200) {
        throw new Error('Failed to send email');
      }

      setShowSuccessDialog(true); // Show the dialog instead of toast

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleData({ ...scheduleData, [e.target.name]: e.target.value });
  };

  const handleScheduleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: scheduleData.name,
          from_email: scheduleData.email,
          subject: 'Call Schedule Request',
          message: `
            Call Schedule Request:
            Name: ${scheduleData.name}
            Email: ${scheduleData.email}
            Date: ${scheduleData.date}
            Time: ${scheduleData.time}
            Topic: ${scheduleData.topic}
          `,
          to_email: 'bamamounicolas@gmail.com',
        }
      );

      if (response.status !== 200) {
        throw new Error('Failed to send schedule request');
      }

      setShowScheduleDialog(false);
      setShowScheduleSuccessDialog(true); // Show success dialog instead of toast

      setScheduleData({
        name: '',
        email: '',
        date: '',
        time: '',
        topic: '',
      });
    } catch (error) {
      console.error('Scheduling error:', error);
      toast({
        title: "Error scheduling call",
        description: "Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your project or career opportunities</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nicolas Bamamou"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="bamamounicolas@gmail.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Beijing Daxing Yizhuang Economic development Zone</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">bamamounicolas@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+86 (188) 107-991-28</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="mb-4">Let's discuss how I can contribute to your next engineering project.</p>
              <Button 
                className="bg-accent hover:bg-accent/90 w-full"
                onClick={() => setShowScheduleDialog(true)}
              >
                <Calendar className="mr-2 h-4 w-4" /> Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl font-semibold">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-center">
              <p className="mt-2">
                Thank you for reaching out, {formData.name.split(' ')[0]}! 
              </p>
              <p className="mt-2">
                I appreciate your interest and will get back to you as soon as possible.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                You can expect a response within 24-48 hours.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Schedule Dialog */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule a Call</DialogTitle>
            <DialogDescription>
              Choose a date and time that works best for you.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="schedule-name" className="font-medium">Your Name</label>
              <Input
                id="schedule-name"
                name="name"
                placeholder="Your name"
                value={scheduleData.name}
                onChange={handleScheduleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="schedule-email" className="font-medium">Your Email</label>
              <Input
                id="schedule-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={scheduleData.email}
                onChange={handleScheduleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="schedule-date" className="font-medium">Preferred Date</label>
              <Input
                id="schedule-date"
                name="date"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={scheduleData.date}
                onChange={handleScheduleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="schedule-time" className="font-medium">Preferred Time</label>
              <Input
                id="schedule-time"
                name="time"
                type="time"
                value={scheduleData.time}
                onChange={handleScheduleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="schedule-topic" className="font-medium">Discussion Topic</label>
              <Input
                id="schedule-topic"
                name="topic"
                placeholder="Brief description of what you'd like to discuss"
                value={scheduleData.topic}
                onChange={handleScheduleChange}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => setShowScheduleDialog(false)}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              onClick={handleScheduleSubmit}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Call'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Schedule Success Dialog */}
      <Dialog 
        open={showScheduleSuccessDialog} 
        onOpenChange={setShowScheduleSuccessDialog}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl font-semibold">
              Call Successfully Scheduled
            </DialogTitle>
            <DialogDescription className="text-center mt-4">
              <p className="text-lg mb-4">
                Thank you for your interest in connecting, {scheduleData.name.split(' ')[0]}!
              </p>
              <div className="bg-secondary/50 p-4 rounded-lg mb-4">
                <p className="font-medium">Your requested time:</p>
                <p className="text-primary">
                  {scheduleData.date}
                </p>
                <p className="text-primary">
                  {scheduleData.time}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                I will review your request and send a calendar invitation within the next 24 hours.
              </p>
              <p className="text-sm text-muted-foreground">
                If you need to make any changes, please don't hesitate to reach out via email.
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button 
              onClick={() => setShowScheduleSuccessDialog(false)}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
