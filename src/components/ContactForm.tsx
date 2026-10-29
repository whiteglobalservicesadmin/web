import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  preselectedService?: string;
}

const ContactForm = ({ preselectedService }: ContactFormProps) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    service: preselectedService || '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Delivery integration is intentionally disabled pending owner approval,
    // privacy review and a verified delivery test.
    setIsSubmitting(false);
    toast({ description: t.contact.form.error, variant: 'destructive' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {t.contact.form.success.split('!')[0]}!
        </h3>
        <p className="text-muted-foreground">
          {t.contact.form.success.split('!')[1]}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p role="status" className="rounded-lg bg-muted p-4 text-sm">
        {language === 'da' ? 'Formularen er ikke tilgængelig endnu. Kontakt os direkte på ' : 'This form is not available yet. Contact us directly at '}
        <a className="underline break-all" href="mailto:info@whiteglobalservices.com">info@whiteglobalservices.com</a>
        {language === 'da' ? ' eller ring ' : ' or call '}
        <a className="underline" href="tel:+4571497700">+45 71 49 77 00</a>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t.contact.form.name} *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{t.contact.form.company}</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t.contact.form.email} *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t.contact.form.phone}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">{t.contact.form.address}</Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">{t.contact.form.service}</Label>
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder={t.contact.form.servicePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="transport">
              {t.contact.form.serviceOptions.transport}
            </SelectItem>
            <SelectItem value="importExport">
              {t.contact.form.serviceOptions.importExport}
            </SelectItem>
            <SelectItem value="privateCleaning">
              {t.contact.form.serviceOptions.privateCleaning}
            </SelectItem>
            <SelectItem value="cleaning">
              {t.contact.form.serviceOptions.cleaning}
            </SelectItem>
            <SelectItem value="trading">
              {t.contact.form.serviceOptions.trading}
            </SelectItem>
            <SelectItem value="other">
              {t.contact.form.serviceOptions.other}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.contact.form.message} *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-background resize-none"
        />
      </div>

      <Button type="submit" className="w-full" disabled={true}>
        {isSubmitting ? '...' : t.contact.form.submit}
      </Button>
    </form>
  );
};

export default ContactForm;
