import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useNotes } from '../src/context/NotesContext';
import BottomTabs from '../src/components/BottomTabs';

const PRIORITY_OPTIONS = [
  { value: 'high', label: 'Alta' },
  { value: 'medium', label: 'Media' },
  { value: 'low', label: 'Baja' },
];

export default function CreateScreen() {
  const router = useRouter();
  const { addNote } = useNotes();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [imageUri, setImageUri] = useState(null);

  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const cameraRef = useRef(null);

  const titleIsValid = title.trim().length >= 3;
  const canSave = titleIsValid && description.trim().length > 0 && !!imageUri;

  async function handleOpenCamera() {
    try {
      if (!permission || !permission.granted) {
        const result = await requestPermission();
        if (!result.granted) {
          Alert.alert(
            'Permiso requerido',
            'Necesitas dar permiso a la cámara para tomar una foto.'
          );
          return;
        }
      }
      setIsCameraOpen(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleTakePicture() {
    try {
      if (!cameraRef.current) return;
      const photo = await cameraRef.current.takePictureAsync();
      if (photo?.uri) {
        setImageUri(photo.uri);
      }
      setIsCameraOpen(false);
    } catch (error) {
      console.error('Error tomando foto', error);
    }
  }

  async function handleSave() {
    if (!canSave) return;

    try {
      await addNote({
        title,
        description,
        imageUri,
        priority,
      });
      router.replace('/');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo guardar la nota.');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: 120 }}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Nueva nota de estudio</Text>

          <Text style={styles.label}>Título *</Text>
          <TextInput
            style={[
              styles.input,
              !titleIsValid && title.length > 0 && styles.inputError,
            ]}
            placeholder="Ej: Repaso de Arquitecturas de Software"
            placeholderTextColor="#6b7280"
            value={title}
            onChangeText={setTitle}
          />
          {!titleIsValid && title.length > 0 && (
            <Text style={styles.errorText}>
              El título debe tener al menos 3 caracteres.
            </Text>
          )}

          <Text style={styles.label}>Descripción</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Escribe un resumen de qué trata esta nota..."
            placeholderTextColor="#6b7280"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <Text style={styles.label}>Prioridad</Text>
          <View style={styles.priorityRow}>
            {PRIORITY_OPTIONS.map((option) => {
              const selected = option.value === priority;
              return (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.priorityChip,
                    selected && styles.priorityChipActive,
                  ]}
                  onPress={() => setPriority(option.value)}
                >
                  <Text
                    style={[
                      styles.priorityChipText,
                      selected && styles.priorityChipTextActive,
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.label}>Foto</Text>
          {imageUri ? (
            <View style={styles.imageWrapper}>
              <Image source={{ uri: imageUri }} style={styles.image} />
            </View>
          ) : (
            <Text style={styles.helperText}>
              Toma una foto del apunte, pizarra o material de estudio.
            </Text>
          )}

          <TouchableOpacity
            style={styles.cameraButton}
            onPress={handleOpenCamera}
          >
            <Text style={styles.cameraButtonText}>
              {imageUri ? 'Volver a tomar foto' : 'Tomar foto'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.saveButton, !canSave && styles.saveButtonDisabled]}
            disabled={!canSave}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Guardar nota</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <BottomTabs />

      {isCameraOpen && (
        <View style={styles.cameraOverlay}>
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing="back"
            mode="picture"
          >
            <View style={styles.cameraControls}>
              <TouchableOpacity
                style={styles.cameraClose}
                onPress={() => setIsCameraOpen(false)}
              >
                <Text style={styles.cameraCloseText}>Cerrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.shutterButton}
                onPress={handleTakePicture}
              >
                <View style={styles.shutterInner} />
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  scroll: {
    flex: 1,
  },
  title: {
    color: '#f9fafb',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  label: {
    color: '#e5e7eb',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#0f172a',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#f9fafb',
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  inputError: {
    borderColor: '#ef4444',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: '#fca5a5',
    fontSize: 12,
    marginTop: 4,
  },
  helperText: {
    color: '#9ca3af',
    fontSize: 12,
    marginBottom: 4,
  },
  priorityRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  priorityChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#374151',
    marginRight: 6,
  },
  priorityChipActive: {
    backgroundColor: '#22c55e33',
    borderColor: '#22c55e',
  },
  priorityChipText: {
    color: '#9ca3af',
    fontSize: 12,
  },
  priorityChipTextActive: {
    color: '#bbf7d0',
    fontWeight: '600',
  },
  imageWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1f2937',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 220,
  },
  cameraButton: {
    marginTop: 4,
    marginBottom: 16,
    backgroundColor: '#0f172a',
    borderRadius: 999,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#22c55e',
  },
  cameraButtonText: {
    color: '#bbf7d0',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#22c55e',
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  saveButtonDisabled: {
    backgroundColor: '#16a34a55',
  },
  saveButtonText: {
    color: '#022c22',
    fontWeight: '700',
    fontSize: 15,
  },
  cameraOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  cameraControls: {
    position: 'absolute',
    bottom: 56,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  cameraClose: {
    position: 'absolute',
    top: 40,
    right: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#00000088',
  },
  cameraCloseText: {
    color: '#f9fafb',
    fontSize: 13,
  },
  shutterButton: {
    width: 72,
    height: 72,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: '#f9fafb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterInner: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: '#f9fafb',
  },
});
